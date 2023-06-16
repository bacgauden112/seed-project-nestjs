select date(effective_date) as effective_date, plan_code,
(SUM((CASE WHEN ns.usage_type = 'DATA' THEN ns.billable_units ELSE 0 END)/1024/1024)) AS data,
(SUM(CASE WHEN ns.usage_type = 'VOICE_MO' THEN ns.billable_units ELSE 0 END)/60) AS voice_mo,
(SUM(CASE WHEN ns.usage_type = 'VOICE_MT' THEN ns.billable_units ELSE 0 END)/60) AS voice_mt,
(SUM(CASE WHEN ns.usage_type = 'VM_DP' THEN ns.billable_units ELSE 0 END)/60) AS vm,
(SUM(CASE WHEN ns.usage_type = 'VOICE_CF' THEN ns.billable_units ELSE 0 END)/60) AS voice_cf,
(SUM(CASE WHEN ns.usage_type = 'SMS_MO' THEN ns.billable_units ELSE 0 END)/60) AS sms_mo,
(SUM(CASE WHEN ns.usage_type = 'SMS_MT' THEN ns.billable_units ELSE 0 END)/60) AS sms_mt
FROM pwg_cdrs_05_23_usage_data_raw ns

-- ATT data text
SELECT MDN, NULL AS BasePricePlanCode, StartTimeUTC, OtherPartyNum as OtherPartyNumber
    , Duration/100 AS DurationSeconds
    , CAST((CAST(UploadDataMB AS decimal(25,6)) + CAST(DownloadDataMB AS decimal(25,6)))/10000/1024 AS decimal(25,6)) AS VolumeMB
    , CASE
    WHEN (BasePricePlanCode LIKE '%SMS%') THEN 'SMS'
    WHEN (BasePricePlanCode LIKE '%MMR%') THEN 'MMS'
    WHEN (BasePricePlanCode LIKE '%RDS%' AND BasePricePlanCode NOT LIKE '%RDST%') THEN 'Data'
    ELSE 'Unknown'
    END AS RecordType
    , CASE
    WHEN CallDirection='MO' THEN 'Out'
    WHEN CallDirection='MT' THEN 'In'
    WHEN (BasePricePlanCode LIKE     '%RDS%') THEN 'Out'
    ELSE 'Unknown'
    END AS Direction
    FROM ATTDataRecords_06_23 VR
    WHERE 1=1
    AND MDN IS NOT NULL
    AND BasePricePlanCode IS NOT NULL

-- ATT voice text
SELECT MDN, BasePricePlanCode, StartTimeUTC, OtherMDN as OtherPartyNumber
    , Duration/100 AS DurationSeconds
    , 0.0 AS VolumeMB
    , 'Voice' AS RecordType
    , CASE
    WHEN CallDirection=1 THEN 'Out'
    WHEN CallDirection=2 THEN 'In'
    ELSE 'Unknown'
    END AS Direction
    FROM ATTVoiceRecords_06_23 VR
    WHERE 1=1
    AND MDN IS NOT NULL
    AND BasePricePlanCode IS NOT NULL

-- Ericsson Text
SELECT MDN, ServiceClass, StartTimeUTC,
    CASE WHEN (TrafficType='Voice') THEN CAST(Duration AS UNSIGNED) ELSE 0 END AS DurationSeconds,
    CASE WHEN (TrafficType='GPRS') THEN CAST(Volume AS decimal(26,6))/1024.0/1024.0 ELSE 0.0 END AS VolumeMB,
    CASE WHEN (TrafficType IN ('Voice','SMS','MMS')) THEN TrafficType
             WHEN (TrafficType='GPRS') THEN 'Data' ELSE 'Unknown' END AS RecordType,
    CASE WHEN (REPLACE(CallType, 'Forwarding', 'Terminating') IN ('Originating','Originating SMS','Originating MMS','GPRS')) THEN 'Out'
             WHEN (REPLACE(CallType, 'Forwarding', 'Terminating') IN ('Terminating','Terminating SMS','Terminating MMS')) THEN 'In' ELSE 'Unknown' END AS Direction, STR_TO_DATE(mid(Filename,20,8),'%Y%m%d') as file_date
    FROM EricCallAdjustments_06_23
    WHERE MDN IS NOT NULL
    AND ServiceClass IS NOT NULL
    AND StartTimeUTC IS NOT NULL
    AND NOT (TrafficType='Voice' AND CallType='Forwarding' AND RatingCode='VM_DEP')
    AND NOT (TrafficType='Voice' AND CallType IN ('Forwarding','Terminating') AND Duration=0)