const site = {
  "settings": {
    "digits": 2,
    "summary_selection": "all",
    "color_by_order": false,
    "boxplots": true,
    "theme_dark": false,
    "partial_init": true,
    "palette": "rdylbu7",
    "hide_url_parameters": false,
    "background_shapes": true,
    "iqr_box": true,
    "polygon_outline": 1.5,
    "color_scale_center": "median",
    "table_autoscroll": true,
    "table_scroll_behavior": "smooth"
  },
  "metadata": {
    "package": "data/datapackage.json",
    "datasets": ["tract", "county", "district"],
    "variables": ["time", "2year_colleges_access_scores:norm_3sfca", "3rd_grade_median_read_score:median_read_pass_rate", "civilian_employment_rate:employment_rate", "community_college_computer_sciences_fca:3sfca_capacity", "community_college_engineering_fca:3sfca_capacity", "community_college_engineering_related_fca:3sfca_capacity", "daycare_services_access_scores:daycare_cnt", "daycare_services_access_scores:daycare_norm_3sfca", "dei_index:norm_dei", "dentist_access_scores:dent_cnt", "dentist_access_scores:dent_e2sfca", "download_speeds:download", "drive_times_nearest_2year_colleges:median_drive_time_top5", "drive_times_nearest_daycares:median_drive_time_top5", "drive_times_nearest_trade_schools:median_drive_time_top5", "drug_overdose_ed_visits:avg_overdose_per_100k", "ems_access_scores:ems_10near_median", "ems_access_scores:ems_3sfca", "ems_access_scores:ems_cnt", "food_insecurity_and_cost:Child_Food_Insecurity_Rate", "food_insecurity_and_cost:Cost_Per_Meal", "food_insecurity_and_cost:Food_Insecurity_Rate", "food_insecurity_and_cost:Num_Child_Food_Insecure", "have_computer:perc_have_computer", "have_internet:perc_have_internet_access", "health_literacy_estimates:health_literacy_estimate", "hospital_access_scores:hos_10near_median", "hospital_access_scores:hos_3sfca", "hospital_access_scores:hos_cnt", "mental_access_scores:mental_10near_median", "mental_access_scores:mental_3sfca", "mental_access_scores:mental_cnt", "no_health_insurance_19_to_64:no_hlth_ins_pct", "obgyn_access_scores:obgyn_cnt", "obgyn_access_scores:obgyn_e2sfca", "pct_pop_broadband:perc_w_broadband", "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL", "pediatrics_access_scores:ped_cnt", "pediatrics_access_scores:ped_e2sfca", "perc_income_on_internet:perc_income_avg_nat_package", "perc_income_on_internet:perc_income_min_price_100", "perc_income_on_internet:perc_income_min_price_25", "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over", "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over", "post_hs_education:perc_post_hs_edu", "preventable_hospitalizations:prevent_hosp_rate", "primary_care_access_scores:prim_cnt", "primary_care_access_scores:prim_e2sfca", "substance_access_scores:subs_10near_median", "substance_access_scores:subs_3sfca", "substance_access_scores:subs_cnt", "trade_schools_access_scores:norm_3sfca", "earnings_per_job:earnings_per_job"],
    "info": {
      "tract": {
        "bytes": 13468086,
        "encoding": "ISO-8859-1",
        "md5": "00a88e5908f970abbfab3b3b33005858",
        "sha512": "021718367544657c162c3ad4376ad64735a7e166699e516f1bd69fd626fa3a53235d5f2c2d5d2b209b23833c8da3d9392e90f8813e1cbf327a3d27340b7637e5",
        "format": "csv",
        "name": "tract",
        "filename": "tract.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2022-02-01 10:11:57",
        "last_modified": "2022-02-01 10:11:57",
        "rowcount": 22884,
        "schema": {
          "fields": [
            {
              "name": "time",
              "duplicates": 22872,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time",
                "sources": {},
                "citations": {}
              },
              "type": "integer",
              "missing": 0,
              "mean": 2015.5,
              "sd": 3.4521,
              "min": 2010,
              "max": 2021
            },
            {
              "name": "2year_colleges_access_scores:norm_3sfca",
              "duplicates": 22257,
              "info": {
                "type": "index",
                "short_name": "2-year college access score",
                "full_name": "2year_colleges_access_scores:norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores",
                "measure": "norm_3sfca",
                "long_name": "2 year college access score (3-step floating catchment areas)",
                "short_description": "Index of 3-year college accessibility based on supply and demand of providers",
                "long_description": "2-year college access score based on 3-step floating catchment areas. This method is an aggregation of college capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for 2-year college (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (graduate and undergraduate).",
                "statement": "The 2-year college accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20984,
              "mean": 11.202,
              "sd": 10.8335,
              "min": 0,
              "max": 100
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 22883,
              "info": {
                "type": "rate",
                "short_name": "3rd grade population passing reading",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score",
                "measure": "median_pass_rate",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "Median percent of 3rd grade population passing reading test for schools in the region",
                "long_description": "Median percent of 3rd grade population passing reading test. The median is calculated across schools in the region.",
                "statement": "The median percent of 3rd graders with passing reading scores in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Virginia Department of Education",
                    "date_accessed": 2021,
                    "url": "https://www.doe.virginia.gov/statistics_reports/sol-pass-rates/index.shtml"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            },
            {
              "name": "civilian_employment_rate:employment_rate",
              "duplicates": 21874,
              "info": {
                "type": "percent",
                "short_name": "Employment rate",
                "full_name": "civilian_employment_rate:employment_rate",
                "category": "Employment/Workforce Development",
                "measure_table": "civilian_employment_rate",
                "measure": "employment_rate",
                "long_name": "Civilian employment rate",
                "short_description": "Population self-reported as employed divided by total civilian workforce population.",
                "long_description": "Population self-reported as employed divided by total civilian workforce population. Based on American Community Survey Table B23025 ACS 2015/2019 5-year estimates.",
                "statement": "The employment rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": "2021",
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 21009,
              "mean": 92.7751,
              "sd": 8.3117,
              "min": 1.77,
              "max": 100
            },
            {
              "name": "community_college_computer_sciences_fca:3sfca_capacity",
              "duplicates": 22592,
              "info": {
                "type": "index",
                "short_name": "Community college computer science program access score",
                "full_name": "community_college_computer_sciences_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_computer_sciences_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college computer science program access score (3-step floating catchment areas)",
                "short_description": "Index of community college computer science program accessibility based on supply and demand of programs",
                "long_description": "Community college computer science program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college computer science program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20986,
              "mean": 1.0627,
              "sd": 1.3608,
              "min": 0,
              "max": 6.0917
            },
            {
              "name": "community_college_engineering_fca:3sfca_capacity",
              "duplicates": 22792,
              "info": {
                "type": "index",
                "short_name": "Community college engineering program access score",
                "full_name": "community_college_engineering_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college engineering program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20989,
              "mean": 1.041,
              "sd": 1.0838,
              "min": 0,
              "max": 8.9778
            },
            {
              "name": "community_college_engineering_related_fca:3sfca_capacity",
              "duplicates": 22684,
              "info": {
                "type": "index",
                "short_name": "Community college engineering-related program access score",
                "full_name": "community_college_engineering_related_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_related_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college engineering-related program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering-related program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering-related program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering-related program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 1.1057,
              "sd": 1.7114,
              "min": 0,
              "max": 14.4108
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 22316,
              "info": {
                "type": "count",
                "short_name": "Day care access (count)",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "measure": "daycare_cnt",
                "long_name": "Access to day care by count",
                "short_description": "Count of day care capacity (seats) based on provider locations",
                "long_description": "Count of day care capacity (seats) based on provider locations. Address and capacity data was collected from Virginia Department of Social Services day care search tool.",
                "statement": "There are {value} daycares in {features.name}",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 20977,
              "mean": 195.5448,
              "sd": 235.0988,
              "min": 0,
              "max": 2273
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 20984,
              "info": {
                "type": "index",
                "short_name": "Day care access score",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "measure": "daycare_norm_3sefca",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. The demand for day care services is the population 0-12 years old and the supply is the capacity of day cares (number of seats).",
                "statement": "The daycare accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20984,
              "mean": 52.4187,
              "sd": 17.5006,
              "min": 0,
              "max": 100
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 17283,
              "info": {
                "type": "index",
                "short_name": "Digital Equity Index",
                "full_name": "dei_index:norm_dei",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index",
                "measure": "norm_dei",
                "long_name": "Digital Equity Index",
                "short_description": "Digital Equity Index captures the relative equity of digital access, with 0 being a score of relative equity and 100 being relative inequity.",
                "long_description": "The Digital Equity Index (DEI) is a composite variable indicating the degree of broadband equity as it relates to adoption, accessibility, and infrastructure. It ranges from 0 to 100, where 100 indicates the most equitable broadband access. The DEI is constructed at the Census tract level and is composed of the following variables: percent of the population under 65 years of age, percent of the population with at least a high school education, percent of the population with income below the poverty level, percent of the population without a disability, the ratio between the share of homes making $75,000 or more per year with internet and the share of homes making less than $35,000 per year without internet, percent of the population with at least one computer, percent of the population with internet access, percent of the population that is low income (less than 30% of HUD Area Median Family Income) and have a housing cost burden over 30%, and average download speeds, upload speeds, and latency from Ookla speed tests.",
                "statement": "The digital equity index for {features.name} is {value}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ],
                "citations": "gallardo20"
              },
              "type": "float",
              "missing": 17280,
              "mean": 70.9817,
              "sd": 16.8324,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 22851,
              "info": {
                "type": "count",
                "short_name": "Dental care access (count)",
                "full_name": "dentist_access_scores:dent_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "measure": "dent_cnt",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} dentists in {features.name}",
                "sources": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 21919,
              "mean": 4.457,
              "sd": 4.9641,
              "min": 1,
              "max": 39
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 21114,
              "info": {
                "type": "index",
                "short_name": "Dental care access score",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "measure": "dent_e2sfca",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0.0004,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0011
            },
            {
              "name": "download_speeds:download",
              "duplicates": 17210,
              "info": {
                "type": "float",
                "short_name": "Average download speed",
                "full_name": "download_speeds:download",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds",
                "measure": "download",
                "long_name": "Average download speed (MB/s)",
                "short_description": "Average download speed for internet connection in MB/s",
                "long_description": "The average download speed for internet users' connections who performed a speed check using Ookla. Speeds are reported in MB/s. A speed of 100 MB/s is considered adequate for school work, video calling etc.",
                "statement": "The average download speed for internet connections in {features.name} is {value} MB/s",
                "sources": [
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 17211,
              "mean": 137.4078,
              "sd": 49.3387,
              "min": 5.4356,
              "max": 347.9637
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 22121,
              "info": {
                "type": "float",
                "short_name": "2-year college access (drive time)",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges",
                "measure": "median_drive_time_top5",
                "long_name": "2-year college access by median drive time to the five closest colleges in minutes",
                "short_description": "Median drive time (minutes) to the five closest 2-year colleges from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest 2-year colleges from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest 2-year colleges to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20985,
              "mean": 40.1988,
              "sd": 26.679,
              "min": 4.2,
              "max": 177.8
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 22509,
              "info": {
                "type": "float",
                "short_name": "Day care access (drive time)",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares",
                "measure": "median_drive_time_top5",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "Median drive time (minutes) to the five closest day cares from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest day cares from centroid of selected region. Address data was collected from the Virginia Department of Social Services Child Day Care Facility search (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest day cares to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20985,
              "mean": 7.83,
              "sd": 8.0243,
              "min": 0.5,
              "max": 71.7
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 21934,
              "info": {
                "type": "float",
                "short_name": "Trade school access (drive time)",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools",
                "measure": "median_drive_time_top5",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "Mean drive time (minutes) to the five closest trade schools from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest trade schools from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest trade schools to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20985,
              "mean": 61.2898,
              "sd": 61.2115,
              "min": 4.8,
              "max": 343.6
            },
            {
              "name": "drug_overdose_ed_visits:avg_overdose_per_100k",
              "duplicates": 22883,
              "info": {
                "type": "rate",
                "short_name": "ED visits for drug overdose",
                "full_name": "drug_overdose_ed_visits:avg_overdose_per_100",
                "category": "Behavioral Health, Substance Use Disorder and Recovery",
                "measure_table": "drug_overdose_ed_visits",
                "measure": "avg_overdose_per_100k",
                "long_name": "Emergency department visits for drug overdose rate per 100,000 residents",
                "short_description": "Average emergency department visits for drug overdose per 100,000 residents.",
                "long_description": "Average emergency department visits for drug overdose per 100,000 residents.",
                "statement": "The average emergency department visits for drug overdose rate in {features.name} is {value} per 100,000 residents",
                "sources": [
                  {
                    "name": "Virginia Department of Health",
                    "date_accessed": "2021",
                    "url": "https://www.vdh.virginia.gov/opioid-data/deaths/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            },
            {
              "name": "ems_access_scores:ems_10near_median",
              "duplicates": 22347,
              "info": {
                "type": "float",
                "short_name": "Emergency medical services access (drive time)",
                "full_name": "ems_access_scores:ems_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_10near_median",
                "long_name": "Emergency medical services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest emergency medical services facilities",
                "long_description": "Median drive time in minutes to the ten closest emergency medical services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest emergency medical service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20986,
              "mean": 14.8955,
              "sd": 8.248,
              "min": 3.7,
              "max": 60.75
            },
            {
              "name": "ems_access_scores:ems_3sfca",
              "duplicates": 20991,
              "info": {
                "type": "index",
                "short_name": "Emergency medical services access score",
                "full_name": "ems_access_scores:ems_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_3sfca",
                "long_name": "Emergency medical services access score (3-step floating catchment areas)",
                "short_description": "Index of emergency medical services accessibility based on supply and demand of facilities",
                "long_description": "Emergency medical services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The emergency medical services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0.0001,
              "sd": 0.0001,
              "min": 0,
              "max": 0.0014
            },
            {
              "name": "ems_access_scores:ems_cnt",
              "duplicates": 22877,
              "info": {
                "type": "count",
                "short_name": "Emergency medical services access (count)",
                "full_name": "ems_access_scores:ems_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_cnt",
                "long_name": "Access to emergency medical services by count",
                "short_description": "Count of emergency medical services facilities based on facility locations",
                "long_description": "Count of emergency medical services facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} emergency medical services facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 22115,
              "mean": 1.4538,
              "sd": 0.7927,
              "min": 1,
              "max": 6
            },
            {
              "name": "food_insecurity_and_cost:Child_Food_Insecurity_Rate",
              "duplicates": 22883,
              "info": {
                "type": "percent",
                "short_name": "Childhood food insecurity rate",
                "full_name": "food_insecurity_and_cost:Child_Food_Insecurity_Rate",
                "category": "Nutrition and Food Security",
                "measure_table": "Child_Food_Insecurity_Rate",
                "measure": "Child_Food_Insecurity_Rate",
                "long_name": "Childhood food insecurity rate",
                "short_description": "Food insecure children are those children living in households experiencing food insecurity (a lack of access to enough food for an active, healthy life).",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecure children are those children living in households experiencing food insecurity. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The childhood food insecurity rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            },
            {
              "name": "food_insecurity_and_cost:Cost_Per_Meal",
              "duplicates": 22883,
              "info": {
                "type": "float",
                "short_name": "Average meal cost",
                "full_name": "food_insecurity_and_cost:Cost_Per_Meal",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Cost_Per_Meal",
                "long_name": "Average meal cost",
                "short_description": "The average weekly dollar amount food-secure individuals report spending on food.",
                "long_description": "The average weekly dollar amount food-secure individuals report spending on food, as estimated by the Current Population Survey, divided by 21 (assuming three meals a day, seven days a week). This amount has been adjusted to reflect local food prices and relevant taxes.",
                "statement": "The average meal cost in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            },
            {
              "name": "food_insecurity_and_cost:Food_Insecurity_Rate",
              "duplicates": 22883,
              "info": {
                "type": "percent",
                "short_name": "Food insecurity rate",
                "full_name": "food_insecurity_and_cost:Food_Insecurity_Rate",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Food_Insecurity_Rate",
                "long_name": "Food insecurity rate",
                "short_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods.",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The food insecurity rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            },
            {
              "name": "food_insecurity_and_cost:Num_Child_Food_Insecure",
              "duplicates": 22883,
              "info": {
                "type": "count",
                "short_name": "Population of food insecure children",
                "full_name": "food_insecurity_and_cost:Num_Child_Food_Insecure",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Num_Child_Food_Insecure",
                "long_name": "Count of population of food insecure children",
                "short_description": "Food insecure children are those children living in households experiencing food insecurity (a lack of access to enough food for an active, healthy life).",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecure children are those children living in households experiencing food insecurity. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The population of food insecure children in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 21109,
              "info": {
                "type": "percent",
                "short_name": "Population with a computer",
                "full_name": "have_computer:perc_have_computer",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer",
                "measure": "perc_have_computer",
                "long_name": "Percent of population with a computer",
                "short_description": "Percent of the population self-reported to have a computer at home",
                "long_description": "Percent of the population self-reported to have a computer at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have a computer",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20993,
              "mean": 90.6652,
              "sd": 8.3038,
              "min": 0,
              "max": 100
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 21078,
              "info": {
                "type": "percent",
                "short_name": "Population with internet access",
                "full_name": "have_internet:perc_have_internet_access",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet",
                "measure": "perc_have_internet_access",
                "long_name": "Percent of population with internet access",
                "short_description": "Percent of the population self-reported to have internet access at home",
                "long_description": "Percent of the population self-reported to have internet access at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have internet access",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20993,
              "mean": 86.5308,
              "sd": 10.8146,
              "min": 38.5576,
              "max": 100
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 22870,
              "info": {
                "type": "index",
                "short_name": "Health literacy estimate",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates",
                "measure": "health_literacy_estimate",
                "long_name": "Health literacy estimate",
                "short_description": "Health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions",
                "long_description": "The health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions. Health literacy estimate is based on variables of demographic characteristics, health status, and health care use.",
                "statement": "The health literacy estimate for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Medical Expenditure Panel Survey",
                    "date_accessed": 2021,
                    "url": "https://www.meps.ahrq.gov/mepsweb/"
                  },
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": "stavitz20, liang17"
              },
              "type": "float",
              "missing": 20977,
              "mean": 0.4329,
              "sd": 0.8731,
              "min": -2.995,
              "max": 3.005
            },
            {
              "name": "hospital_access_scores:hos_10near_median",
              "duplicates": 21819,
              "info": {
                "type": "float",
                "short_name": "Hospital access (drive time)",
                "full_name": "hospital_access_scores:hos_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_10near_median",
                "long_name": "Hospital access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest hospital s",
                "long_description": "Median drive time in minutes to the ten closest hospitals. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest hospitals to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20986,
              "mean": 41.3264,
              "sd": 24.0153,
              "min": 8.05,
              "max": 184.65
            },
            {
              "name": "hospital_access_scores:hos_3sfca",
              "duplicates": 21678,
              "info": {
                "type": "index",
                "short_name": "Hospital access score",
                "full_name": "hospital_access_scores:hos_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_3sfca",
                "long_name": "Hospital access score (3-step floating catchment areas)",
                "short_description": "Index of hospital accessibility based on supply and demand of facilities",
                "long_description": "Hospital access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The hospital accessibility score for {features.name} is  {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "hospital_access_scores:hos_cnt",
              "duplicates": 22880,
              "info": {
                "type": "count",
                "short_name": "Hospital access (count)",
                "full_name": "hospital_access_scores:hos_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_cnt",
                "long_name": "Access to hospitals by count",
                "short_description": "Count of hospitals based on facility locations",
                "long_description": "Count of hospitals based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} hospitals in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 22786,
              "mean": 1.1429,
              "sd": 0.4308,
              "min": 1,
              "max": 3
            },
            {
              "name": "mental_access_scores:mental_10near_median",
              "duplicates": 22009,
              "info": {
                "type": "float",
                "short_name": "Mental health services access (drive time)",
                "full_name": "mental_access_scores:mental_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_10near_median",
                "long_name": "Mental health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest mental health services facilities",
                "long_description": "Median drive time in minutes to the ten closest mental health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest mental health service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20986,
              "mean": 26.5859,
              "sd": 18.8488,
              "min": 2.8,
              "max": 179.75
            },
            {
              "name": "mental_access_scores:mental_3sfca",
              "duplicates": 21239,
              "info": {
                "type": "index",
                "short_name": "Mental health services access score",
                "full_name": "mental_access_scores:mental_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_3sfca",
                "long_name": "Mental health services access score (3-step  floating catchment areas)",
                "short_description": "Index of mental health services accessibility based on supply and demand of facilities",
                "long_description": "Mental health services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The mental health services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0003
            },
            {
              "name": "mental_access_scores:mental_cnt",
              "duplicates": 22879,
              "info": {
                "type": "count",
                "short_name": "Mental health services access (count)",
                "full_name": "mental_access_scores:mental_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_cnt",
                "long_name": "Access to mental health services by count",
                "short_description": "Count of mental health facilities based on facility locations",
                "long_description": "Count of mental health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} mental health facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 22685,
              "mean": 1.1859,
              "sd": 0.493,
              "min": 1,
              "max": 4
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 21407,
              "info": {
                "type": "percent",
                "short_name": "Uninsured population",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64",
                "measure": "no_hlth_ins_pct",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population (ages 16-64) self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. Based on American Community Survey Tables B18135 and C27001I in ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population has no health insurance in  {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 13514,
              "mean": 2.7716,
              "sd": 5.3258,
              "min": 0,
              "max": 66.75
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 22840,
              "info": {
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "measure": "obgyn_cnt",
                "long_name": "OBGYN care access by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} OBGYNs in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 22411,
              "mean": 6.5116,
              "sd": 13.4527,
              "min": 1,
              "max": 137
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 21330,
              "info": {
                "type": "index",
                "short_name": "OBGYN care access score",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "measure": "obgyn_e2sfca",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0.0007,
              "sd": 0.0005,
              "min": 0,
              "max": 0.0022
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 17376,
              "info": {
                "type": "percent",
                "short_name": "Population with broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband",
                "measure": "perc_w_broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "Percent of population self-reported to have a broadband internet connection (any type of internet other than a dial-up)",
                "long_description": "Percent of population self-reported to have a broadband internet connection. Broadband internet is defined as any type of internet other than a dial-up. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} has a broadband connection",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 17264,
              "mean": 0.8124,
              "sd": 0.134,
              "min": 0,
              "max": 1
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 17352,
              "info": {
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl",
                "measure": "perc_w_cable_fiber_DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "Percent of population self-reported to have a high speed internet service (cable, fiber optic, or DSL)",
                "long_description": "Percent of population self-reported to have a high speed internet service. A high speed internet service is defined as a cable, fiber optic, or DSL internet connection. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} has a cable fiber or DSL internet connection",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 17264,
              "mean": 0.6813,
              "sd": 0.2062,
              "min": 0,
              "max": 1
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 22842,
              "info": {
                "type": "count",
                "short_name": "Pediatric care access (count)",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "measure": "ped_cnt",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "Count of pediatricians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} pediatricians in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 22290,
              "mean": 6.6532,
              "sd": 14.8042,
              "min": 1,
              "max": 189
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 21178,
              "info": {
                "type": "index",
                "short_name": "Pediatric care access score",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "measure": "ped_e2sfca",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "Pediatric care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of pediatricians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for pediatricians (population under 16). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The pediatric care accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0.0022,
              "sd": 0.0018,
              "min": 0,
              "max": 0.013
            },
            {
              "name": "perc_income_on_internet:perc_income_avg_nat_package",
              "duplicates": 21066,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for internet (average)",
                "full_name": "perc_income_on_internet:perc_income_avg_nat_package",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_avg_nat_package",
                "long_name": "The national average price for internet as a percent of average income",
                "short_description": "The national average price for internet ($64) as a percent of average income",
                "long_description": "The national average price for internet ($64) as a percent of average income.",
                "statement": "The national average internet package costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 21020,
              "mean": 1.229,
              "sd": 0.9108,
              "min": 0.3072,
              "max": 27.9883
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_100",
              "duplicates": 21132,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for fast internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_100",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_min_price_100",
                "long_name": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income.",
                "statement": "Fast internet costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 21115,
              "mean": 1.1163,
              "sd": 0.9766,
              "min": 0.1685,
              "max": 11.1153
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_25",
              "duplicates": 21142,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for good internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_25",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_min_price_25",
                "long_name": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income.",
                "statement": "Good internet costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 21115,
              "mean": 0.6097,
              "sd": 0.361,
              "min": 0.144,
              "max": 3.3527
            },
            {
              "name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
              "duplicates": 13517,
              "info": {
                "type": "percent",
                "short_name": "Poor mental health population",
                "full_name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_ment_hlth_days_14_and_over",
                "measure": "perc_poor_ment_hlth_days_14_and_over",
                "long_name": "Percent of the population with poor mental health",
                "short_description": "Percent of the population self-reporting poor mental health",
                "long_description": "Percent of the population self-reporting poor mental health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} of the population in {features.name} report poor mental health",
                "sources": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 13517,
              "mean": 11.0718,
              "sd": 2.9202,
              "min": 4.2515,
              "max": 30.9632
            },
            {
              "name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
              "duplicates": 13516,
              "info": {
                "type": "percent",
                "short_name": "Poor physical health population",
                "full_name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_phys_hlth_days_14_and_over",
                "measure": "perc_poor_phys_hlth_days_14_and_over",
                "long_name": "Percent of the population with poor physical health",
                "short_description": "Percent of the population self-reporting poor physical health",
                "long_description": "Percent of the population self-reporting poor physical health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} of the population in {features.name} report poor physical health",
                "sources": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 13517,
              "mean": 11.6625,
              "sd": 3.9075,
              "min": 2.185,
              "max": 39.2897
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 21008,
              "info": {
                "type": "percent",
                "short_name": "Population with post-high school education",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education",
                "measure": "perc_post_hs_edu",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "Percent of the population self-reported to have post-high school level degree",
                "long_description": "Percent of the population self-reported to have post-high school level degree. Based on American Community Survey Table B15003 in ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have a post-high school education",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/data/developers/data-sets/acs-5year.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 21005,
              "mean": 0.6479,
              "sd": 0.1734,
              "min": 0.1559,
              "max": 1
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 22883,
              "info": {
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations",
                "measure": "prevent_hosp_rate",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{value} of the hospitalizations in {features.name}  were preventable (due to conditions usually treated in outpatient settings)",
                "sources": [
                  {
                    "name": "County Health Rankings",
                    "date_accessed": 2021,
                    "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 22779,
              "info": {
                "type": "count",
                "short_name": "Primary care access (count)",
                "full_name": "primary_care_access_scores:prim_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "measure": "prim_cnt",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} primary care physicians in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 21593,
              "mean": 15.1944,
              "sd": 41.2479,
              "min": 1,
              "max": 847
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 21012,
              "info": {
                "type": "index",
                "short_name": "Primary care access score",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "measure": "prim_e2sfca",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0.0024,
              "sd": 0.0015,
              "min": 0,
              "max": 0.0094
            },
            {
              "name": "substance_access_scores:subs_10near_median",
              "duplicates": 21995,
              "info": {
                "type": "float",
                "short_name": "Substance use/behavioral health services access (drive time)",
                "full_name": "substance_access_scores:subs_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_10near_median",
                "long_name": "Substance use/behavioral health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest substance use/behavioral health services facilities",
                "long_description": "Median drive time in minutes to the ten closest substance use/behavioral health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest substance use/behavioral health service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 20986,
              "mean": 29.1517,
              "sd": 21.9092,
              "min": 3.85,
              "max": 179.3
            },
            {
              "name": "substance_access_scores:subs_3sfca",
              "duplicates": 21294,
              "info": {
                "type": "index",
                "short_name": "Substance use/behavioral health services access score",
                "full_name": "substance_access_scores:subs_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_3sfca",
                "long_name": "Substance use/behavioral health services access score (3-step floating catchment areas)",
                "short_description": "Index of substance use/behavioral health services accessibility based on supply and demand of facilities",
                "long_description": "Substance use/behavioral health services access score based on 3-step  floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The substance use/behavioral health services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "substance_access_scores:subs_cnt",
              "duplicates": 22880,
              "info": {
                "type": "count",
                "short_name": "Substance use/behavioral health  access (count)",
                "full_name": "substance_access_scores:subs_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_cnt",
                "long_name": "Access to substance use/behavioral health  by count",
                "short_description": "Count of substance use/behavioral health facilities based on facility locations",
                "long_description": "Count of substance use/behavioral health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} substance use facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 22707,
              "mean": 1.1412,
              "sd": 0.3804,
              "min": 1,
              "max": 3
            },
            {
              "name": "trade_schools_access_scores:norm_3sfca",
              "duplicates": 22437,
              "info": {
                "type": "index",
                "short_name": "Trade school access score",
                "full_name": "trade_schools_access_scores:norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores",
                "measure": "norm_3sfca",
                "long_name": "Trade school access score (3-step floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Trade school access score based on 3-step floating catchment areas. This method is an aggregation of trade school capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for trade schools (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (undergraduate).",
                "statement": "The trade school accessibility score for {features.name} is  {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 20985,
              "mean": 22.1145,
              "sd": 24.095,
              "min": 0,
              "max": 100
            },
            {
              "name": "earnings_per_job:earnings_per_job",
              "duplicates": 22883,
              "info": {
                "type": "ratio",
                "short_name": "Average of earnings per job",
                "full_name": "earnings_per_job:earnings_per_job",
                "category": "Employment/Workforce Development",
                "measure_table": "earnings_per_job",
                "measure": "earnings_per_job",
                "long_name": "Earnings per job",
                "short_description": "Earnings per job.",
                "long_description": "Earnings per job is calculated based on the GDP and Personal Income table from the Bureau of Economic Analysis.",
                "statement": "Earnings per job in {features.name} is ${value}",
                "sources": [
                  {
                    "name": "Bureau of Economic Analysis",
                    "date_accessed": "2021",
                    "url": "https://apps.bea.gov/iTable/iTable.cfm?reqid=70&step=1&acrdn=6"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 22884
            }
          ]
        },
        "_references": {
          "lou04": {
            "id": "lou04",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              }
            ],
            "year": 2004,
            "title": "Using a gis-based floating catchment method to assess areas with shortage of physicians",
            "journal": "Health & Place",
            "volume": "10",
            "number": 1,
            "page": "1-11",
            "doi": "10.1016/S1353-8292(02)00067-9"
          },
          "lou09": {
            "id": "lou09",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Yi",
                "family": "Qi"
              }
            ],
            "year": 2009,
            "title": "An enhanced two-step floating catchment area (e2sfca) method for measuring spatial accessibility to primary care physicians",
            "journal": "Health & Place",
            "volume": "15",
            "number": 4,
            "page": "1100-1107",
            "doi": "10.1016/j.healthplace.2009.06.002"
          },
          "lou03": {
            "id": "lou03",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Fahui",
                "family": "Wang"
              }
            ],
            "year": 2003,
            "title": "Measures of spatial accessibility to health care in a gis environment: synthesis and a case study in the Chicago region",
            "journal": "Environment and Planning B: Planning and Design",
            "volume": "30",
            "number": 6,
            "page": "865-884",
            "doi": "10.1068/b29120"
          },
          "saxon20": {
            "id": "saxon20",
            "author": [
              {
                "given": "James",
                "family": "Saxon"
              },
              {
                "given": "Julia",
                "family": "Koschinsky"
              },
              {
                "given": "Karina",
                "family": "Acosta"
              },
              {
                "given": "Vidal",
                "family": "Anguiano"
              },
              {
                "given": "Luc",
                "family": "Anselin"
              },
              {
                "given": "Sergio",
                "family": "Rey"
              }
            ],
            "year": 2020,
            "title": "An Open Software Environment to Make Spatial Access Metrics More Accessible",
            "journal": "University of Chicago: Center for Spatial Data Science",
            "volume": "Preprint",
            "doi": "10.13140/RG.2.2.12396.28807"
          },
          "gallardo20": {
            "id": "gallardo20",
            "author": [
              {
                "given": "Robert",
                "family": "Gallardo"
              }
            ],
            "year": 2020,
            "title": "Digital Divide Index",
            "journal": "Purdue Center for Regional Development",
            "url": "http://pcrd.purdue.edu/ddi"
          },
          "liang17": {
            "id": "liang17",
            "author": [
              {
                "given": "Lan",
                "family": "Liang"
              },
              {
                "given": "Cindy",
                "family": "Branch"
              }
            ],
            "year": 2017,
            "title": "Health Literacy Universal Precautions Are Still a Distant Dream: Analysis of U.S. Data on Health Literate Practices",
            "journal": "Health Literacy Research and Practice",
            "volume": "1",
            "number": 4,
            "page": "e216-e230",
            "doi": "10.3928/24748307-20170929-01"
          },
          "savitz20": {
            "id": "savitz20",
            "author": [
              {
                "given": "Samuel",
                "family": "Savitz"
              },
              {
                "given": "Stacy",
                "family": "Bailey"
              },
              {
                "given": "Stacie",
                "family": "Dusetzina"
              },
              {
                "given": "W.",
                "family": "Schuyler Jones"
              },
              {
                "given": "Justin",
                "family": "Trogdon"
              },
              {
                "given": "Sally",
                "family": "Stearns"
              }
            ],
            "year": 2020,
            "title": "Treatment selection and medication adherence for stable angina: The role of area-based health literacy",
            "journal": "Journal of Evaluation in Clinical Practice",
            "volume": "26",
            "number": 6,
            "page": "1711-1721",
            "doi": "10.1111/jep.13341"
          }
        },
        "site_file": "tract.json"
      },
      "county": {
        "bytes": 1130945,
        "encoding": "ISO-8859-1",
        "md5": "7dae25576a8806c287df073776932a0d",
        "sha512": "f7366af1458cd6ad8b7f0416cb2ddd6d18a1f1ad1803888f5d429ed568339424d697e774d668a530abd4afd974be0ed3013bd379a0338d91f58424bf7cc67de6",
        "format": "csv",
        "name": "county",
        "filename": "county.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2022-02-01 10:11:57",
        "last_modified": "2022-02-01 10:11:57",
        "rowcount": 1884,
        "schema": {
          "fields": [
            {
              "name": "time",
              "duplicates": 1872,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time",
                "sources": {},
                "citations": {}
              },
              "type": "integer",
              "missing": 0,
              "mean": 2015.5,
              "sd": 3.453,
              "min": 2010,
              "max": 2021
            },
            {
              "name": "2year_colleges_access_scores:norm_3sfca",
              "duplicates": 1775,
              "info": {
                "type": "index",
                "short_name": "2-year college access score",
                "full_name": "2year_colleges_access_scores:norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores",
                "measure": "norm_3sfca",
                "long_name": "2 year college access score (3-step floating catchment areas)",
                "short_description": "Index of 3-year college accessibility based on supply and demand of providers",
                "long_description": "2-year college access score based on 3-step floating catchment areas. This method is an aggregation of college capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for 2-year college (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (graduate and undergraduate).",
                "statement": "The 2-year college accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 13.0918,
              "sd": 18.3241,
              "min": 0,
              "max": 100
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 1798,
              "info": {
                "type": "rate",
                "short_name": "3rd grade population passing reading",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score",
                "measure": "median_pass_rate",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "Median percent of 3rd grade population passing reading test for schools in the region",
                "long_description": "Median percent of 3rd grade population passing reading test. The median is calculated across schools in the region.",
                "statement": "The median percent of 3rd graders with passing reading scores in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Virginia Department of Education",
                    "date_accessed": 2021,
                    "url": "https://www.doe.virginia.gov/statistics_reports/sol-pass-rates/index.shtml"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1630,
              "mean": 64.0276,
              "sd": 13.5331,
              "min": 24,
              "max": 96
            },
            {
              "name": "civilian_employment_rate:employment_rate",
              "duplicates": 1760,
              "info": {
                "type": "percent",
                "short_name": "Employment rate",
                "full_name": "civilian_employment_rate:employment_rate",
                "category": "Employment/Workforce Development",
                "measure_table": "civilian_employment_rate",
                "measure": "employment_rate",
                "long_name": "Civilian employment rate",
                "short_description": "Population self-reported as employed divided by total civilian workforce population.",
                "long_description": "Population self-reported as employed divided by total civilian workforce population. Based on American Community Survey Table B23025 ACS 2015/2019 5-year estimates.",
                "statement": "The employment rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": "2021",
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 93.8042,
              "sd": 3.6151,
              "min": 74.85,
              "max": 98.09
            },
            {
              "name": "community_college_computer_sciences_fca:3sfca_capacity",
              "duplicates": 1800,
              "info": {
                "type": "index",
                "short_name": "Community college computer science program access score",
                "full_name": "community_college_computer_sciences_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_computer_sciences_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college computer science program access score (3-step floating catchment areas)",
                "short_description": "Index of community college computer science program accessibility based on supply and demand of programs",
                "long_description": "Community college computer science program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college computer science program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.4113,
              "sd": 0.7636,
              "min": 0,
              "max": 4.6862
            },
            {
              "name": "community_college_engineering_fca:3sfca_capacity",
              "duplicates": 1838,
              "info": {
                "type": "index",
                "short_name": "Community college engineering program access score",
                "full_name": "community_college_engineering_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college engineering program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.4818,
              "sd": 0.9926,
              "min": 0,
              "max": 6.7681
            },
            {
              "name": "community_college_engineering_related_fca:3sfca_capacity",
              "duplicates": 1798,
              "info": {
                "type": "index",
                "short_name": "Community college engineering-related program access score",
                "full_name": "community_college_engineering_related_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_related_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college engineering-related program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering-related program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering-related program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering-related program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.9322,
              "sd": 1.6849,
              "min": 0,
              "max": 11.7183
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 1753,
              "info": {
                "type": "count",
                "short_name": "Day care access (count)",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "measure": "daycare_cnt",
                "long_name": "Access to day care by count",
                "short_description": "Count of day care capacity (seats) based on provider locations",
                "long_description": "Count of day care capacity (seats) based on provider locations. Address and capacity data was collected from Virginia Department of Social Services day care search tool.",
                "statement": "There are {value} daycares in {features.name}",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 2803.7895,
              "sd": 7034.2298,
              "min": 19,
              "max": 64562
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 1750,
              "info": {
                "type": "index",
                "short_name": "Day care access score",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "measure": "daycare_norm_3sefca",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. The demand for day care services is the population 0-12 years old and the supply is the capacity of day cares (number of seats).",
                "statement": "The daycare accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 38.6391,
              "sd": 21.6239,
              "min": 0,
              "max": 100
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 1488,
              "info": {
                "type": "index",
                "short_name": "Digital Equity Index",
                "full_name": "dei_index:norm_dei",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index",
                "measure": "norm_dei",
                "long_name": "Digital Equity Index",
                "short_description": "Digital Equity Index captures the relative equity of digital access, with 0 being a score of relative equity and 100 being relative inequity.",
                "long_description": "The Digital Equity Index (DEI) is a composite variable indicating the degree of broadband equity as it relates to adoption, accessibility, and infrastructure. It ranges from 0 to 100, where 100 indicates the most equitable broadband access. The DEI is constructed at the Census tract level and is composed of the following variables: percent of the population under 65 years of age, percent of the population with at least a high school education, percent of the population with income below the poverty level, percent of the population without a disability, the ratio between the share of homes making $75,000 or more per year with internet and the share of homes making less than $35,000 per year without internet, percent of the population with at least one computer, percent of the population with internet access, percent of the population that is low income (less than 30% of HUD Area Median Family Income) and have a housing cost burden over 30%, and average download speeds, upload speeds, and latency from Ookla speed tests.",
                "statement": "The digital equity index for {features.name} is {value}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ],
                "citations": "gallardo20"
              },
              "type": "float",
              "missing": 1485,
              "mean": 46.8091,
              "sd": 23.3058,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 1833,
              "info": {
                "type": "count",
                "short_name": "Dental care access (count)",
                "full_name": "dentist_access_scores:dent_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "measure": "dent_cnt",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} dentists in {features.name}",
                "sources": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 32.3383,
              "sd": 89.6895,
              "min": 0,
              "max": 894
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 1756,
              "info": {
                "type": "index",
                "short_name": "Dental care access score",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "measure": "dent_e2sfca",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.0003,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0011
            },
            {
              "name": "download_speeds:download",
              "duplicates": 1484,
              "info": {
                "type": "float",
                "short_name": "Average download speed",
                "full_name": "download_speeds:download",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds",
                "measure": "download",
                "long_name": "Average download speed (MB/s)",
                "short_description": "Average download speed for internet connection in MB/s",
                "long_description": "The average download speed for internet users' connections who performed a speed check using Ookla. Speeds are reported in MB/s. A speed of 100 MB/s is considered adequate for school work, video calling etc.",
                "statement": "The average download speed for internet connections in {features.name} is {value} MB/s",
                "sources": [
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1485,
              "mean": 111.8176,
              "sd": 49.3439,
              "min": 8.1556,
              "max": 234.4607
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 1757,
              "info": {
                "type": "float",
                "short_name": "2-year college access (drive time)",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges",
                "measure": "median_drive_time_top5",
                "long_name": "2-year college access by median drive time to the five closest colleges in minutes",
                "short_description": "Median drive time (minutes) to the five closest 2-year colleges from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest 2-year colleges from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest 2-year colleges to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 58.7816,
              "sd": 25.1372,
              "min": 9,
              "max": 128.6
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 1780,
              "info": {
                "type": "float",
                "short_name": "Day care access (drive time)",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares",
                "measure": "median_drive_time_top5",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "Median drive time (minutes) to the five closest day cares from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest day cares from centroid of selected region. Address data was collected from the Virginia Department of Social Services Child Day Care Facility search (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest day cares to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 10.4207,
              "sd": 9.4238,
              "min": 0.9,
              "max": 49.6
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 1752,
              "info": {
                "type": "float",
                "short_name": "Trade school access (drive time)",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools",
                "measure": "median_drive_time_top5",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "Mean drive time (minutes) to the five closest trade schools from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest trade schools from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest trade schools to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 99.0586,
              "sd": 66.2404,
              "min": 10.1,
              "max": 322.7
            },
            {
              "name": "drug_overdose_ed_visits:avg_overdose_per_100k",
              "duplicates": 1163,
              "info": {
                "type": "rate",
                "short_name": "ED visits for drug overdose",
                "full_name": "drug_overdose_ed_visits:avg_overdose_per_100",
                "category": "Behavioral Health, Substance Use Disorder and Recovery",
                "measure_table": "drug_overdose_ed_visits",
                "measure": "avg_overdose_per_100k",
                "long_name": "Emergency department visits for drug overdose rate per 100,000 residents",
                "short_description": "Average emergency department visits for drug overdose per 100,000 residents.",
                "long_description": "Average emergency department visits for drug overdose per 100,000 residents.",
                "statement": "The average emergency department visits for drug overdose rate in {features.name} is {value} per 100,000 residents",
                "sources": [
                  {
                    "name": "Virginia Department of Health",
                    "date_accessed": "2021",
                    "url": "https://www.vdh.virginia.gov/opioid-data/deaths/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 958,
              "mean": 16.0866,
              "sd": 9.6737,
              "min": 0,
              "max": 66.8564
            },
            {
              "name": "ems_access_scores:ems_10near_median",
              "duplicates": 1883,
              "info": {
                "type": "float",
                "short_name": "Emergency medical services access (drive time)",
                "full_name": "ems_access_scores:ems_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_10near_median",
                "long_name": "Emergency medical services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest emergency medical services facilities",
                "long_description": "Median drive time in minutes to the ten closest emergency medical services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest emergency medical service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 1884
            },
            {
              "name": "ems_access_scores:ems_3sfca",
              "duplicates": 1750,
              "info": {
                "type": "index",
                "short_name": "Emergency medical services access score",
                "full_name": "ems_access_scores:ems_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_3sfca",
                "long_name": "Emergency medical services access score (3-step floating catchment areas)",
                "short_description": "Index of emergency medical services accessibility based on supply and demand of facilities",
                "long_description": "Emergency medical services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The emergency medical services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.0003,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0012
            },
            {
              "name": "ems_access_scores:ems_cnt",
              "duplicates": 1857,
              "info": {
                "type": "count",
                "short_name": "Emergency medical services access (count)",
                "full_name": "ems_access_scores:ems_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_cnt",
                "long_name": "Access to emergency medical services by count",
                "short_description": "Count of emergency medical services facilities based on facility locations",
                "long_description": "Count of emergency medical services facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} emergency medical services facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 8.406,
              "sd": 6.7622,
              "min": 0,
              "max": 42
            },
            {
              "name": "food_insecurity_and_cost:Child_Food_Insecurity_Rate",
              "duplicates": 1653,
              "info": {
                "type": "percent",
                "short_name": "Childhood food insecurity rate",
                "full_name": "food_insecurity_and_cost:Child_Food_Insecurity_Rate",
                "category": "Nutrition and Food Security",
                "measure_table": "Child_Food_Insecurity_Rate",
                "measure": "Child_Food_Insecurity_Rate",
                "long_name": "Childhood food insecurity rate",
                "short_description": "Food insecure children are those children living in households experiencing food insecurity (a lack of access to enough food for an active, healthy life).",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecure children are those children living in households experiencing food insecurity. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The childhood food insecurity rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 554,
              "mean": 16.7853,
              "sd": 4.715,
              "min": 1.4,
              "max": 32.3
            },
            {
              "name": "food_insecurity_and_cost:Cost_Per_Meal",
              "duplicates": 1608,
              "info": {
                "type": "float",
                "short_name": "Average meal cost",
                "full_name": "food_insecurity_and_cost:Cost_Per_Meal",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Cost_Per_Meal",
                "long_name": "Average meal cost",
                "short_description": "The average weekly dollar amount food-secure individuals report spending on food.",
                "long_description": "The average weekly dollar amount food-secure individuals report spending on food, as estimated by the Current Population Survey, divided by 21 (assuming three meals a day, seven days a week). This amount has been adjusted to reflect local food prices and relevant taxes.",
                "statement": "The average meal cost in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 687,
              "mean": 3.0402,
              "sd": 0.2853,
              "min": 2.41,
              "max": 4.51
            },
            {
              "name": "food_insecurity_and_cost:Food_Insecurity_Rate",
              "duplicates": 1685,
              "info": {
                "type": "percent",
                "short_name": "Food insecurity rate",
                "full_name": "food_insecurity_and_cost:Food_Insecurity_Rate",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Food_Insecurity_Rate",
                "long_name": "Food insecurity rate",
                "short_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods.",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The food insecurity rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 554,
              "mean": 12.2723,
              "sd": 4.2626,
              "min": 3.4,
              "max": 28.1
            },
            {
              "name": "food_insecurity_and_cost:Num_Child_Food_Insecure",
              "duplicates": 1464,
              "info": {
                "type": "count",
                "short_name": "Population of food insecure children",
                "full_name": "food_insecurity_and_cost:Num_Child_Food_Insecure",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Num_Child_Food_Insecure",
                "long_name": "Count of population of food insecure children",
                "short_description": "Food insecure children are those children living in households experiencing food insecurity (a lack of access to enough food for an active, healthy life).",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecure children are those children living in households experiencing food insecurity. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The population of food insecure children in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 554,
              "mean": 1913.2782,
              "sd": 3241.5838,
              "min": 40,
              "max": 32280
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 1750,
              "info": {
                "type": "percent",
                "short_name": "Population with a computer",
                "full_name": "have_computer:perc_have_computer",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer",
                "measure": "perc_have_computer",
                "long_name": "Percent of population with a computer",
                "short_description": "Percent of the population self-reported to have a computer at home",
                "long_description": "Percent of the population self-reported to have a computer at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have a computer",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 85.8138,
              "sd": 6.83,
              "min": 66.6667,
              "max": 98.2511
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 1750,
              "info": {
                "type": "percent",
                "short_name": "Population with internet access",
                "full_name": "have_internet:perc_have_internet_access",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet",
                "measure": "perc_have_internet_access",
                "long_name": "Percent of population with internet access",
                "short_description": "Percent of the population self-reported to have internet access at home",
                "long_description": "Percent of the population self-reported to have internet access at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have internet access",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 79.9714,
              "sd": 8.6137,
              "min": 61.2392,
              "max": 97.3068
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 1878,
              "info": {
                "type": "index",
                "short_name": "Health literacy estimate",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates",
                "measure": "health_literacy_estimate",
                "long_name": "Health literacy estimate",
                "short_description": "Health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions",
                "long_description": "The health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions. Health literacy estimate is based on variables of demographic characteristics, health status, and health care use.",
                "statement": "The health literacy estimate for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Medical Expenditure Panel Survey",
                    "date_accessed": 2021,
                    "url": "https://www.meps.ahrq.gov/mepsweb/"
                  },
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": "stavitz20, liang17"
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.3165,
              "sd": 0.6769,
              "min": -0.995,
              "max": 3.005
            },
            {
              "name": "hospital_access_scores:hos_10near_median",
              "duplicates": 1883,
              "info": {
                "type": "float",
                "short_name": "Hospital access (drive time)",
                "full_name": "hospital_access_scores:hos_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_10near_median",
                "long_name": "Hospital access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest hospital s",
                "long_description": "Median drive time in minutes to the ten closest hospitals. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest hospitals to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 1884
            },
            {
              "name": "hospital_access_scores:hos_3sfca",
              "duplicates": 1750,
              "info": {
                "type": "index",
                "short_name": "Hospital access score",
                "full_name": "hospital_access_scores:hos_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_3sfca",
                "long_name": "Hospital access score (3-step floating catchment areas)",
                "short_description": "Index of hospital accessibility based on supply and demand of facilities",
                "long_description": "Hospital access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The hospital accessibility score for {features.name} is  {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "hospital_access_scores:hos_cnt",
              "duplicates": 1875,
              "info": {
                "type": "count",
                "short_name": "Hospital access (count)",
                "full_name": "hospital_access_scores:hos_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_cnt",
                "long_name": "Access to hospitals by count",
                "short_description": "Count of hospitals based on facility locations",
                "long_description": "Count of hospitals based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} hospitals in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 0.8421,
              "sd": 1.2238,
              "min": 0,
              "max": 7
            },
            {
              "name": "mental_access_scores:mental_10near_median",
              "duplicates": 1883,
              "info": {
                "type": "float",
                "short_name": "Mental health services access (drive time)",
                "full_name": "mental_access_scores:mental_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_10near_median",
                "long_name": "Mental health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest mental health services facilities",
                "long_description": "Median drive time in minutes to the ten closest mental health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest mental health service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 1884
            },
            {
              "name": "mental_access_scores:mental_3sfca",
              "duplicates": 1750,
              "info": {
                "type": "index",
                "short_name": "Mental health services access score",
                "full_name": "mental_access_scores:mental_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_3sfca",
                "long_name": "Mental health services access score (3-step  floating catchment areas)",
                "short_description": "Index of mental health services accessibility based on supply and demand of facilities",
                "long_description": "Mental health services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The mental health services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "mental_access_scores:mental_cnt",
              "duplicates": 1872,
              "info": {
                "type": "count",
                "short_name": "Mental health services access (count)",
                "full_name": "mental_access_scores:mental_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_cnt",
                "long_name": "Access to mental health services by count",
                "short_description": "Count of mental health facilities based on facility locations",
                "long_description": "Count of mental health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} mental health facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 1.7744,
              "sd": 2.4576,
              "min": 0,
              "max": 21
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 1558,
              "info": {
                "type": "percent",
                "short_name": "Uninsured population",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64",
                "measure": "no_hlth_ins_pct",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population (ages 16-64) self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. Based on American Community Survey Tables B18135 and C27001I in ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population has no health insurance in  {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1219,
              "mean": 1.8443,
              "sd": 2.5411,
              "min": 0,
              "max": 21.15
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 1836,
              "info": {
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "measure": "obgyn_cnt",
                "long_name": "OBGYN care access by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} OBGYNs in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 23.1579,
              "sd": 60.3872,
              "min": 0,
              "max": 562
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 1772,
              "info": {
                "type": "index",
                "short_name": "OBGYN care access score",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "measure": "obgyn_e2sfca",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.0004,
              "sd": 0.0004,
              "min": 0,
              "max": 0.0022
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 1484,
              "info": {
                "type": "percent",
                "short_name": "Population with broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband",
                "measure": "perc_w_broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "Percent of population self-reported to have a broadband internet connection (any type of internet other than a dial-up)",
                "long_description": "Percent of population self-reported to have a broadband internet connection. Broadband internet is defined as any type of internet other than a dial-up. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} has a broadband connection",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1485,
              "mean": 0.7311,
              "sd": 0.1038,
              "min": 0.4825,
              "max": 0.9542
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 1484,
              "info": {
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl",
                "measure": "perc_w_cable_fiber_DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "Percent of population self-reported to have a high speed internet service (cable, fiber optic, or DSL)",
                "long_description": "Percent of population self-reported to have a high speed internet service. A high speed internet service is defined as a cable, fiber optic, or DSL internet connection. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} has a cable fiber or DSL internet connection",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1485,
              "mean": 0.5431,
              "sd": 0.1717,
              "min": 0.1007,
              "max": 0.8975
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 1837,
              "info": {
                "type": "count",
                "short_name": "Pediatric care access (count)",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "measure": "ped_cnt",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "Count of pediatricians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} pediatricians in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 29.7143,
              "sd": 82.4288,
              "min": 0,
              "max": 753
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 1755,
              "info": {
                "type": "index",
                "short_name": "Pediatric care access score",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "measure": "ped_e2sfca",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "Pediatric care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of pediatricians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for pediatricians (population under 16). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The pediatric care accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.0014,
              "sd": 0.0015,
              "min": 0,
              "max": 0.0126
            },
            {
              "name": "perc_income_on_internet:perc_income_avg_nat_package",
              "duplicates": 1750,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for internet (average)",
                "full_name": "perc_income_on_internet:perc_income_avg_nat_package",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_avg_nat_package",
                "long_name": "The national average price for internet as a percent of average income",
                "short_description": "The national average price for internet ($64) as a percent of average income",
                "long_description": "The national average price for internet ($64) as a percent of average income.",
                "statement": "The national average internet package costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 1.4486,
              "sd": 0.47,
              "min": 0.5629,
              "max": 2.8556
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_100",
              "duplicates": 1753,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for fast internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_100",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_min_price_100",
                "long_name": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income.",
                "statement": "Fast internet costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1754,
              "mean": 1.3831,
              "sd": 0.8034,
              "min": 0.2601,
              "max": 5.0806
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_25",
              "duplicates": 1753,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for good internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_25",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_min_price_25",
                "long_name": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income.",
                "statement": "Good internet costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1754,
              "mean": 0.7812,
              "sd": 0.2915,
              "min": 0.2095,
              "max": 1.4816
            },
            {
              "name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
              "duplicates": 1218,
              "info": {
                "type": "percent",
                "short_name": "Poor mental health population",
                "full_name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_ment_hlth_days_14_and_over",
                "measure": "perc_poor_ment_hlth_days_14_and_over",
                "long_name": "Percent of the population with poor mental health",
                "short_description": "Percent of the population self-reporting poor mental health",
                "long_description": "Percent of the population self-reporting poor mental health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} of the population in {features.name} report poor mental health",
                "sources": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1219,
              "mean": 10.9624,
              "sd": 2.1822,
              "min": 5.8043,
              "max": 25.0482
            },
            {
              "name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
              "duplicates": 1218,
              "info": {
                "type": "percent",
                "short_name": "Poor physical health population",
                "full_name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_phys_hlth_days_14_and_over",
                "measure": "perc_poor_phys_hlth_days_14_and_over",
                "long_name": "Percent of the population with poor physical health",
                "short_description": "Percent of the population self-reporting poor physical health",
                "long_description": "Percent of the population self-reporting poor physical health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} of the population in {features.name} report poor physical health",
                "sources": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1219,
              "mean": 12.1872,
              "sd": 2.8533,
              "min": 5.1487,
              "max": 28.9455
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 1750,
              "info": {
                "type": "percent",
                "short_name": "Population with post-high school education",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education",
                "measure": "perc_post_hs_edu",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "Percent of the population self-reported to have post-high school level degree",
                "long_description": "Percent of the population self-reported to have post-high school level degree. Based on American Community Survey Table B15003 in ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have a post-high school education",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/data/developers/data-sets/acs-5year.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.5561,
              "sd": 0.1148,
              "min": 0.3501,
              "max": 0.9162
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 1059,
              "info": {
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations",
                "measure": "prevent_hosp_rate",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{value} of the hospitalizations in {features.name}  were preventable (due to conditions usually treated in outpatient settings)",
                "sources": [
                  {
                    "name": "County Health Rankings",
                    "date_accessed": 2021,
                    "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 981,
              "mean": 5161.0676,
              "sd": 1879.0309,
              "min": 2091,
              "max": 18247
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 1790,
              "info": {
                "type": "count",
                "short_name": "Primary care access (count)",
                "full_name": "primary_care_access_scores:prim_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "measure": "prim_cnt",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} primary care physicians in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 147.4887,
              "sd": 341.3477,
              "min": 1,
              "max": 3152
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 1750,
              "info": {
                "type": "index",
                "short_name": "Primary care access score",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "measure": "prim_e2sfca",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0.002,
              "sd": 0.0014,
              "min": 0.0001,
              "max": 0.0091
            },
            {
              "name": "substance_access_scores:subs_10near_median",
              "duplicates": 1883,
              "info": {
                "type": "float",
                "short_name": "Substance use/behavioral health services access (drive time)",
                "full_name": "substance_access_scores:subs_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_10near_median",
                "long_name": "Substance use/behavioral health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest substance use/behavioral health services facilities",
                "long_description": "Median drive time in minutes to the ten closest substance use/behavioral health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest substance use/behavioral health service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 1884
            },
            {
              "name": "substance_access_scores:subs_3sfca",
              "duplicates": 1750,
              "info": {
                "type": "index",
                "short_name": "Substance use/behavioral health services access score",
                "full_name": "substance_access_scores:subs_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_3sfca",
                "long_name": "Substance use/behavioral health services access score (3-step floating catchment areas)",
                "short_description": "Index of substance use/behavioral health services accessibility based on supply and demand of facilities",
                "long_description": "Substance use/behavioral health services access score based on 3-step  floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The substance use/behavioral health services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0001
            },
            {
              "name": "substance_access_scores:subs_cnt",
              "duplicates": 1873,
              "info": {
                "type": "count",
                "short_name": "Substance use/behavioral health  access (count)",
                "full_name": "substance_access_scores:subs_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_cnt",
                "long_name": "Access to substance use/behavioral health  by count",
                "short_description": "Count of substance use/behavioral health facilities based on facility locations",
                "long_description": "Count of substance use/behavioral health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} substance use facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 1751,
              "mean": 1.5188,
              "sd": 2.3179,
              "min": 0,
              "max": 19
            },
            {
              "name": "trade_schools_access_scores:norm_3sfca",
              "duplicates": 1829,
              "info": {
                "type": "index",
                "short_name": "Trade school access score",
                "full_name": "trade_schools_access_scores:norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores",
                "measure": "norm_3sfca",
                "long_name": "Trade school access score (3-step floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Trade school access score based on 3-step floating catchment areas. This method is an aggregation of trade school capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for trade schools (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (undergraduate).",
                "statement": "The trade school accessibility score for {features.name} is  {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 1751,
              "mean": 9.9285,
              "sd": 18.1286,
              "min": 0,
              "max": 100
            },
            {
              "name": "earnings_per_job:earnings_per_job",
              "duplicates": 1253,
              "info": {
                "type": "ratio",
                "short_name": "Average of earnings per job",
                "full_name": "earnings_per_job:earnings_per_job",
                "category": "Employment/Workforce Development",
                "measure_table": "earnings_per_job",
                "measure": "earnings_per_job",
                "long_name": "Earnings per job",
                "short_description": "Earnings per job.",
                "long_description": "Earnings per job is calculated based on the GDP and Personal Income table from the Bureau of Economic Analysis.",
                "statement": "Earnings per job in {features.name} is ${value}",
                "sources": [
                  {
                    "name": "Bureau of Economic Analysis",
                    "date_accessed": "2021",
                    "url": "https://apps.bea.gov/iTable/iTable.cfm?reqid=70&step=1&acrdn=6"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 1254,
              "mean": 46923.2398,
              "sd": 14536.2388,
              "min": 23169.8842,
              "max": 116153.6904
            }
          ]
        },
        "_references": {
          "lou04": {
            "id": "lou04",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              }
            ],
            "year": 2004,
            "title": "Using a gis-based floating catchment method to assess areas with shortage of physicians",
            "journal": "Health & Place",
            "volume": "10",
            "number": 1,
            "page": "1-11",
            "doi": "10.1016/S1353-8292(02)00067-9"
          },
          "lou09": {
            "id": "lou09",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Yi",
                "family": "Qi"
              }
            ],
            "year": 2009,
            "title": "An enhanced two-step floating catchment area (e2sfca) method for measuring spatial accessibility to primary care physicians",
            "journal": "Health & Place",
            "volume": "15",
            "number": 4,
            "page": "1100-1107",
            "doi": "10.1016/j.healthplace.2009.06.002"
          },
          "lou03": {
            "id": "lou03",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Fahui",
                "family": "Wang"
              }
            ],
            "year": 2003,
            "title": "Measures of spatial accessibility to health care in a gis environment: synthesis and a case study in the Chicago region",
            "journal": "Environment and Planning B: Planning and Design",
            "volume": "30",
            "number": 6,
            "page": "865-884",
            "doi": "10.1068/b29120"
          },
          "saxon20": {
            "id": "saxon20",
            "author": [
              {
                "given": "James",
                "family": "Saxon"
              },
              {
                "given": "Julia",
                "family": "Koschinsky"
              },
              {
                "given": "Karina",
                "family": "Acosta"
              },
              {
                "given": "Vidal",
                "family": "Anguiano"
              },
              {
                "given": "Luc",
                "family": "Anselin"
              },
              {
                "given": "Sergio",
                "family": "Rey"
              }
            ],
            "year": 2020,
            "title": "An Open Software Environment to Make Spatial Access Metrics More Accessible",
            "journal": "University of Chicago: Center for Spatial Data Science",
            "volume": "Preprint",
            "doi": "10.13140/RG.2.2.12396.28807"
          },
          "gallardo20": {
            "id": "gallardo20",
            "author": [
              {
                "given": "Robert",
                "family": "Gallardo"
              }
            ],
            "year": 2020,
            "title": "Digital Divide Index",
            "journal": "Purdue Center for Regional Development",
            "url": "http://pcrd.purdue.edu/ddi"
          },
          "liang17": {
            "id": "liang17",
            "author": [
              {
                "given": "Lan",
                "family": "Liang"
              },
              {
                "given": "Cindy",
                "family": "Branch"
              }
            ],
            "year": 2017,
            "title": "Health Literacy Universal Precautions Are Still a Distant Dream: Analysis of U.S. Data on Health Literate Practices",
            "journal": "Health Literacy Research and Practice",
            "volume": "1",
            "number": 4,
            "page": "e216-e230",
            "doi": "10.3928/24748307-20170929-01"
          },
          "savitz20": {
            "id": "savitz20",
            "author": [
              {
                "given": "Samuel",
                "family": "Savitz"
              },
              {
                "given": "Stacy",
                "family": "Bailey"
              },
              {
                "given": "Stacie",
                "family": "Dusetzina"
              },
              {
                "given": "W.",
                "family": "Schuyler Jones"
              },
              {
                "given": "Justin",
                "family": "Trogdon"
              },
              {
                "given": "Sally",
                "family": "Stearns"
              }
            ],
            "year": 2020,
            "title": "Treatment selection and medication adherence for stable angina: The role of area-based health literacy",
            "journal": "Journal of Evaluation in Clinical Practice",
            "volume": "26",
            "number": 6,
            "page": "1711-1721",
            "doi": "10.1111/jep.13341"
          }
        },
        "site_file": "county.json"
      },
      "district": {
        "bytes": 266599,
        "encoding": "ISO-8859-1",
        "md5": "d38ca12613845132f6a0443d6c2efaaf",
        "sha512": "6e1880dd714e1f0025984cd82a5f55ebc870d8c27b6fb239a03e6807a1bc8becf5e03152a17fe301b5d49ab5ea62c09dbe9aec8085cfe721c3003907fb7dcc04",
        "format": "csv",
        "name": "district",
        "filename": "health_district.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2022-02-01 10:11:57",
        "last_modified": "2022-02-01 10:11:57",
        "rowcount": 420,
        "schema": {
          "fields": [
            {
              "name": "time",
              "duplicates": 408,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time",
                "sources": {},
                "citations": {}
              },
              "type": "integer",
              "missing": 0,
              "mean": 2015.5,
              "sd": 3.4562,
              "min": 2010,
              "max": 2021
            },
            {
              "name": "2year_colleges_access_scores:norm_3sfca",
              "duplicates": 385,
              "info": {
                "type": "index",
                "short_name": "2-year college access score",
                "full_name": "2year_colleges_access_scores:norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores",
                "measure": "norm_3sfca",
                "long_name": "2 year college access score (3-step floating catchment areas)",
                "short_description": "Index of 3-year college accessibility based on supply and demand of providers",
                "long_description": "2-year college access score based on 3-step floating catchment areas. This method is an aggregation of college capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for 2-year college (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (graduate and undergraduate).",
                "statement": "The 2-year college accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 19.6881,
              "sd": 19.8365,
              "min": 0,
              "max": 100
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 373,
              "info": {
                "type": "rate",
                "short_name": "3rd grade population passing reading",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score",
                "measure": "median_pass_rate",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "Median percent of 3rd grade population passing reading test for schools in the region",
                "long_description": "Median percent of 3rd grade population passing reading test. The median is calculated across schools in the region.",
                "statement": "The median percent of 3rd graders with passing reading scores in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Virginia Department of Education",
                    "date_accessed": 2021,
                    "url": "https://www.doe.virginia.gov/statistics_reports/sol-pass-rates/index.shtml"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 350,
              "mean": 64.2857,
              "sd": 10.4931,
              "min": 24,
              "max": 81.5
            },
            {
              "name": "civilian_employment_rate:employment_rate",
              "duplicates": 419,
              "info": {
                "type": "percent",
                "short_name": "Employment rate",
                "full_name": "civilian_employment_rate:employment_rate",
                "category": "Employment/Workforce Development",
                "measure_table": "civilian_employment_rate",
                "measure": "employment_rate",
                "long_name": "Civilian employment rate",
                "short_description": "Population self-reported as employed divided by total civilian workforce population.",
                "long_description": "Population self-reported as employed divided by total civilian workforce population. Based on American Community Survey Table B23025 ACS 2015/2019 5-year estimates.",
                "statement": "The employment rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": "2021",
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "community_college_computer_sciences_fca:3sfca_capacity",
              "duplicates": 419,
              "info": {
                "type": "index",
                "short_name": "Community college computer science program access score",
                "full_name": "community_college_computer_sciences_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_computer_sciences_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college computer science program access score (3-step floating catchment areas)",
                "short_description": "Index of community college computer science program accessibility based on supply and demand of programs",
                "long_description": "Community college computer science program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college computer science program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "community_college_engineering_fca:3sfca_capacity",
              "duplicates": 419,
              "info": {
                "type": "index",
                "short_name": "Community college engineering program access score",
                "full_name": "community_college_engineering_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college engineering program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "community_college_engineering_related_fca:3sfca_capacity",
              "duplicates": 419,
              "info": {
                "type": "index",
                "short_name": "Community college engineering-related program access score",
                "full_name": "community_college_engineering_related_fca:3sfca_capacity",
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_related_fca",
                "measure": "3sfca_capacity",
                "long_name": "Community college engineering-related program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering-related program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering-related program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering-related program accessibility score in {features.name} is {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 384,
              "info": {
                "type": "count",
                "short_name": "Day care access (count)",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "measure": "daycare_cnt",
                "long_name": "Access to day care by count",
                "short_description": "Count of day care capacity (seats) based on provider locations",
                "long_description": "Count of day care capacity (seats) based on provider locations. Address and capacity data was collected from Virginia Department of Social Services day care search tool.",
                "statement": "There are {value} daycares in {features.name}",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 10654.4,
              "sd": 12153.9074,
              "min": 1027,
              "max": 67563
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Day care access score",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "measure": "daycare_norm_3sefca",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. The demand for day care services is the population 0-12 years old and the supply is the capacity of day cares (number of seats).",
                "statement": "The daycare accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 40.3427,
              "sd": 22.6432,
              "min": 0,
              "max": 100
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 318,
              "info": {
                "type": "index",
                "short_name": "Digital Equity Index",
                "full_name": "dei_index:norm_dei",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index",
                "measure": "norm_dei",
                "long_name": "Digital Equity Index",
                "short_description": "Digital Equity Index captures the relative equity of digital access, with 0 being a score of relative equity and 100 being relative inequity.",
                "long_description": "The Digital Equity Index (DEI) is a composite variable indicating the degree of broadband equity as it relates to adoption, accessibility, and infrastructure. It ranges from 0 to 100, where 100 indicates the most equitable broadband access. The DEI is constructed at the Census tract level and is composed of the following variables: percent of the population under 65 years of age, percent of the population with at least a high school education, percent of the population with income below the poverty level, percent of the population without a disability, the ratio between the share of homes making $75,000 or more per year with internet and the share of homes making less than $35,000 per year without internet, percent of the population with at least one computer, percent of the population with internet access, percent of the population that is low income (less than 30% of HUD Area Median Family Income) and have a housing cost burden over 30%, and average download speeds, upload speeds, and latency from Ookla speed tests.",
                "statement": "The digital equity index for {features.name} is {value}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ],
                "citations": "gallardo20"
              },
              "type": "float",
              "missing": 315,
              "mean": 51.4114,
              "sd": 27.409,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 386,
              "info": {
                "type": "count",
                "short_name": "Dental care access (count)",
                "full_name": "dentist_access_scores:dent_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "measure": "dent_cnt",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} dentists in {features.name}",
                "sources": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 122.8857,
              "sd": 170.4947,
              "min": 15,
              "max": 1000
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Dental care access score",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "measure": "dent_e2sfca",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0.0003,
              "sd": 0.0001,
              "min": 0.0001,
              "max": 0.0007
            },
            {
              "name": "download_speeds:download",
              "duplicates": 314,
              "info": {
                "type": "float",
                "short_name": "Average download speed",
                "full_name": "download_speeds:download",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds",
                "measure": "download",
                "long_name": "Average download speed (MB/s)",
                "short_description": "Average download speed for internet connection in MB/s",
                "long_description": "The average download speed for internet users' connections who performed a speed check using Ookla. Speeds are reported in MB/s. A speed of 100 MB/s is considered adequate for school work, video calling etc.",
                "statement": "The average download speed for internet connections in {features.name} is {value} MB/s",
                "sources": [
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 315,
              "mean": 126.4226,
              "sd": 38.9209,
              "min": 27.5995,
              "max": 208.2953
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 384,
              "info": {
                "type": "float",
                "short_name": "2-year college access (drive time)",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges",
                "measure": "median_drive_time_top5",
                "long_name": "2-year college access by median drive time to the five closest colleges in minutes",
                "short_description": "Median drive time (minutes) to the five closest 2-year colleges from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest 2-year colleges from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest 2-year colleges to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 52.2886,
              "sd": 32.3618,
              "min": 9,
              "max": 122.8
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 387,
              "info": {
                "type": "float",
                "short_name": "Day care access (drive time)",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares",
                "measure": "median_drive_time_top5",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "Median drive time (minutes) to the five closest day cares from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest day cares from centroid of selected region. Address data was collected from the Virginia Department of Social Services Child Day Care Facility search (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest day cares to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 13.28,
              "sd": 12.5682,
              "min": 1.8,
              "max": 62.1
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 384,
              "info": {
                "type": "float",
                "short_name": "Trade school access (drive time)",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools",
                "measure": "median_drive_time_top5",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "Mean drive time (minutes) to the five closest trade schools from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest trade schools from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest trade schools to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 83.0486,
              "sd": 70.8312,
              "min": 14,
              "max": 300.9
            },
            {
              "name": "drug_overdose_ed_visits:avg_overdose_per_100k",
              "duplicates": 178,
              "info": {
                "type": "rate",
                "short_name": "ED visits for drug overdose",
                "full_name": "drug_overdose_ed_visits:avg_overdose_per_100",
                "category": "Behavioral Health, Substance Use Disorder and Recovery",
                "measure_table": "drug_overdose_ed_visits",
                "measure": "avg_overdose_per_100k",
                "long_name": "Emergency department visits for drug overdose rate per 100,000 residents",
                "short_description": "Average emergency department visits for drug overdose per 100,000 residents.",
                "long_description": "Average emergency department visits for drug overdose per 100,000 residents.",
                "statement": "The average emergency department visits for drug overdose rate in {features.name} is {value} per 100,000 residents",
                "sources": [
                  {
                    "name": "Virginia Department of Health",
                    "date_accessed": "2021",
                    "url": "https://www.vdh.virginia.gov/opioid-data/deaths/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 175,
              "mean": 16.9805,
              "sd": 9.0948,
              "min": 0.7509,
              "max": 66.8564
            },
            {
              "name": "ems_access_scores:ems_10near_median",
              "duplicates": 419,
              "info": {
                "type": "float",
                "short_name": "Emergency medical services access (drive time)",
                "full_name": "ems_access_scores:ems_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_10near_median",
                "long_name": "Emergency medical services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest emergency medical services facilities",
                "long_description": "Median drive time in minutes to the ten closest emergency medical services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest emergency medical service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "ems_access_scores:ems_3sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Emergency medical services access score",
                "full_name": "ems_access_scores:ems_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_3sfca",
                "long_name": "Emergency medical services access score (3-step floating catchment areas)",
                "short_description": "Index of emergency medical services accessibility based on supply and demand of facilities",
                "long_description": "Emergency medical services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The emergency medical services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0.0002,
              "sd": 0.0001,
              "min": 0,
              "max": 0.0005
            },
            {
              "name": "ems_access_scores:ems_cnt",
              "duplicates": 394,
              "info": {
                "type": "count",
                "short_name": "Emergency medical services access (count)",
                "full_name": "ems_access_scores:ems_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "measure": "ems_cnt",
                "long_name": "Access to emergency medical services by count",
                "short_description": "Count of emergency medical services facilities based on facility locations",
                "long_description": "Count of emergency medical services facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} emergency medical services facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 31.9429,
              "sd": 13.584,
              "min": 8,
              "max": 58
            },
            {
              "name": "food_insecurity_and_cost:Child_Food_Insecurity_Rate",
              "duplicates": 103,
              "info": {
                "type": "percent",
                "short_name": "Childhood food insecurity rate",
                "full_name": "food_insecurity_and_cost:Child_Food_Insecurity_Rate",
                "category": "Nutrition and Food Security",
                "measure_table": "Child_Food_Insecurity_Rate",
                "measure": "Child_Food_Insecurity_Rate",
                "long_name": "Childhood food insecurity rate",
                "short_description": "Food insecure children are those children living in households experiencing food insecurity (a lack of access to enough food for an active, healthy life).",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecure children are those children living in households experiencing food insecurity. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The childhood food insecurity rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 70,
              "mean": 15.8235,
              "sd": 4.4052,
              "min": 1.69,
              "max": 25.97
            },
            {
              "name": "food_insecurity_and_cost:Cost_Per_Meal",
              "duplicates": 127,
              "info": {
                "type": "float",
                "short_name": "Average meal cost",
                "full_name": "food_insecurity_and_cost:Cost_Per_Meal",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Cost_Per_Meal",
                "long_name": "Average meal cost",
                "short_description": "The average weekly dollar amount food-secure individuals report spending on food.",
                "long_description": "The average weekly dollar amount food-secure individuals report spending on food, as estimated by the Current Population Survey, divided by 21 (assuming three meals a day, seven days a week). This amount has been adjusted to reflect local food prices and relevant taxes.",
                "statement": "The average meal cost in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 105,
              "mean": 3.0877,
              "sd": 0.3096,
              "min": 2.5615,
              "max": 4.38
            },
            {
              "name": "food_insecurity_and_cost:Food_Insecurity_Rate",
              "duplicates": 113,
              "info": {
                "type": "percent",
                "short_name": "Food insecurity rate",
                "full_name": "food_insecurity_and_cost:Food_Insecurity_Rate",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Food_Insecurity_Rate",
                "long_name": "Food insecurity rate",
                "short_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods.",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The food insecurity rate in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 70,
              "mean": 12.1414,
              "sd": 4.0066,
              "min": 3.36,
              "max": 22.83
            },
            {
              "name": "food_insecurity_and_cost:Num_Child_Food_Insecure",
              "duplicates": 117,
              "info": {
                "type": "count",
                "short_name": "Population of food insecure children",
                "full_name": "food_insecurity_and_cost:Num_Child_Food_Insecure",
                "category": "Nutrition and Food Security",
                "measure_table": "food_insecurity_and_cost",
                "measure": "Num_Child_Food_Insecure",
                "long_name": "Count of population of food insecure children",
                "short_description": "Food insecure children are those children living in households experiencing food insecurity (a lack of access to enough food for an active, healthy life).",
                "long_description": "Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecurity refers to USDA's measure of lack of access, at times, to enough food for an active, healthy life for all household members and limited or uncertain availability of nutritionally adequate foods. Food insecure children are those children living in households experiencing food insecurity. Food-insecure households are not necessarily food insecure all the time. Food insecurity may reflect a household's need to make trade-offs between important basic needs, such as housing or medical bills, and purchasing nutritionally adequate foods.",
                "statement": "The population of food insecure children in {features.name} is {value}",
                "sources": [
                  {
                    "name": "Feeding America",
                    "date_accessed": "2021",
                    "url": "https://www.feedingamerica.org/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 70,
              "mean": 7270.4571,
              "sd": 4752.492,
              "min": 1130,
              "max": 33320
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 384,
              "info": {
                "type": "percent",
                "short_name": "Population with a computer",
                "full_name": "have_computer:perc_have_computer",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer",
                "measure": "perc_have_computer",
                "long_name": "Percent of population with a computer",
                "short_description": "Percent of the population self-reported to have a computer at home",
                "long_description": "Percent of the population self-reported to have a computer at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have a computer",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 88.3058,
              "sd": 6.6137,
              "min": 71.9306,
              "max": 97.4945
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 384,
              "info": {
                "type": "percent",
                "short_name": "Population with internet access",
                "full_name": "have_internet:perc_have_internet_access",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet",
                "measure": "perc_have_internet_access",
                "long_name": "Percent of population with internet access",
                "short_description": "Percent of the population self-reported to have internet access at home",
                "long_description": "Percent of the population self-reported to have internet access at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have internet access",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 83.4686,
              "sd": 8.2578,
              "min": 65.2433,
              "max": 96.4738
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 415,
              "info": {
                "type": "index",
                "short_name": "Health literacy estimate",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates",
                "measure": "health_literacy_estimate",
                "long_name": "Health literacy estimate",
                "short_description": "Health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions",
                "long_description": "The health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions. Health literacy estimate is based on variables of demographic characteristics, health status, and health care use.",
                "statement": "The health literacy estimate for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Medical Expenditure Panel Survey",
                    "date_accessed": 2021,
                    "url": "https://www.meps.ahrq.gov/mepsweb/"
                  },
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": "stavitz20, liang17"
              },
              "type": "float",
              "missing": 385,
              "mean": 0.1767,
              "sd": 0.207,
              "min": -0.995,
              "max": 0.2193
            },
            {
              "name": "hospital_access_scores:hos_10near_median",
              "duplicates": 419,
              "info": {
                "type": "float",
                "short_name": "Hospital access (drive time)",
                "full_name": "hospital_access_scores:hos_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_10near_median",
                "long_name": "Hospital access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest hospital s",
                "long_description": "Median drive time in minutes to the ten closest hospitals. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest hospitals to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "hospital_access_scores:hos_3sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Hospital access score",
                "full_name": "hospital_access_scores:hos_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_3sfca",
                "long_name": "Hospital access score (3-step floating catchment areas)",
                "short_description": "Index of hospital accessibility based on supply and demand of facilities",
                "long_description": "Hospital access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The hospital accessibility score for {features.name} is  {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0,
              "sd": 9e-06,
              "min": 4e-06,
              "max": 0
            },
            {
              "name": "hospital_access_scores:hos_cnt",
              "duplicates": 412,
              "info": {
                "type": "count",
                "short_name": "Hospital access (count)",
                "full_name": "hospital_access_scores:hos_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "measure": "hospital_cnt",
                "long_name": "Access to hospitals by count",
                "short_description": "Count of hospitals based on facility locations",
                "long_description": "Count of hospitals based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} hospitals in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 3.2,
              "sd": 1.6943,
              "min": 1,
              "max": 7
            },
            {
              "name": "mental_access_scores:mental_10near_median",
              "duplicates": 419,
              "info": {
                "type": "float",
                "short_name": "Mental health services access (drive time)",
                "full_name": "mental_access_scores:mental_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_10near_median",
                "long_name": "Mental health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest mental health services facilities",
                "long_description": "Median drive time in minutes to the ten closest mental health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest mental health service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "mental_access_scores:mental_3sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Mental health services access score",
                "full_name": "mental_access_scores:mental_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_3sfca",
                "long_name": "Mental health services access score (3-step  floating catchment areas)",
                "short_description": "Index of mental health services accessibility based on supply and demand of facilities",
                "long_description": "Mental health services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The mental health services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0001
            },
            {
              "name": "mental_access_scores:mental_cnt",
              "duplicates": 405,
              "info": {
                "type": "count",
                "short_name": "Mental health services access (count)",
                "full_name": "mental_access_scores:mental_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "measure": "mental_cnt",
                "long_name": "Access to mental health services by count",
                "short_description": "Count of mental health facilities based on facility locations",
                "long_description": "Count of mental health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} mental health facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 6.7429,
              "sd": 4.2795,
              "min": 0,
              "max": 22
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 252,
              "info": {
                "type": "percent",
                "short_name": "Uninsured population",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64",
                "measure": "no_hlth_ins_pct",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population (ages 16-64) self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. Based on American Community Survey Tables B18135 and C27001I in ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population has no health insurance in  {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 245,
              "mean": 2.3091,
              "sd": 2.4521,
              "min": 0.2,
              "max": 15.4533
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 388,
              "info": {
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "measure": "obgyn_cnt",
                "long_name": "OBGYN care access by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} OBGYNs in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 88,
              "sd": 106.409,
              "min": 7,
              "max": 611
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "OBGYN care access score",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "measure": "obgyn_e2sfca",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0.0006,
              "sd": 0.0004,
              "min": 0,
              "max": 0.0018
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 314,
              "info": {
                "type": "percent",
                "short_name": "Population with broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband",
                "measure": "perc_w_broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "Percent of population self-reported to have a broadband internet connection (any type of internet other than a dial-up)",
                "long_description": "Percent of population self-reported to have a broadband internet connection. Broadband internet is defined as any type of internet other than a dial-up. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} has a broadband connection",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 315,
              "mean": 0.7744,
              "sd": 0.1013,
              "min": 0.5415,
              "max": 0.9462
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 314,
              "info": {
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl",
                "measure": "perc_w_cable_fiber_DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "Percent of population self-reported to have a high speed internet service (cable, fiber optic, or DSL)",
                "long_description": "Percent of population self-reported to have a high speed internet service. A high speed internet service is defined as a cable, fiber optic, or DSL internet connection. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} has a cable fiber or DSL internet connection",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 315,
              "mean": 0.621,
              "sd": 0.1498,
              "min": 0.3044,
              "max": 0.8797
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 386,
              "info": {
                "type": "count",
                "short_name": "Pediatric care access (count)",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "measure": "ped_cnt",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "Count of pediatricians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} pediatricians in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 112.9143,
              "sd": 146.6692,
              "min": 9,
              "max": 798
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Pediatric care access score",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "measure": "ped_e2sfca",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "Pediatric care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of pediatricians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for pediatricians (population under 16). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The pediatric care accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0.0019,
              "sd": 0.0013,
              "min": 0.0005,
              "max": 0.0055
            },
            {
              "name": "perc_income_on_internet:perc_income_avg_nat_package",
              "duplicates": 384,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for internet (average)",
                "full_name": "perc_income_on_internet:perc_income_avg_nat_package",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_avg_nat_package",
                "long_name": "The national average price for internet as a percent of average income",
                "short_description": "The national average price for internet ($64) as a percent of average income",
                "long_description": "The national average price for internet ($64) as a percent of average income.",
                "statement": "The national average internet package costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 1.3613,
              "sd": 0.4498,
              "min": 0.5629,
              "max": 2.1182
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_100",
              "duplicates": 384,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for fast internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_100",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_min_price_100",
                "long_name": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income.",
                "statement": "Fast internet costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 1.3685,
              "sd": 0.9447,
              "min": 0.3673,
              "max": 5.0806
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_25",
              "duplicates": 384,
              "info": {
                "type": "percent",
                "short_name": "Percent of income for good internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_25",
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "measure": "perc_income_min_price_25",
                "long_name": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income.",
                "statement": "Good internet costs {value} of the average income in {features.name}",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 0.6988,
              "sd": 0.2473,
              "min": 0.296,
              "max": 1.2042
            },
            {
              "name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
              "duplicates": 244,
              "info": {
                "type": "percent",
                "short_name": "Poor mental health population",
                "full_name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_ment_hlth_days_14_and_over",
                "measure": "perc_poor_ment_hlth_days_14_and_over",
                "long_name": "Percent of the population with poor mental health",
                "short_description": "Percent of the population self-reporting poor mental health",
                "long_description": "Percent of the population self-reporting poor mental health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} of the population in {features.name} report poor mental health",
                "sources": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 245,
              "mean": 11.0482,
              "sd": 1.1744,
              "min": 7.5212,
              "max": 14.8132
            },
            {
              "name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
              "duplicates": 244,
              "info": {
                "type": "percent",
                "short_name": "Poor physical health population",
                "full_name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_phys_hlth_days_14_and_over",
                "measure": "perc_poor_phys_hlth_days_14_and_over",
                "long_name": "Percent of the population with poor physical health",
                "short_description": "Percent of the population self-reporting poor physical health",
                "long_description": "Percent of the population self-reporting poor physical health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} of the population in {features.name} report poor physical health",
                "sources": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 245,
              "mean": 11.8331,
              "sd": 1.6579,
              "min": 7.1868,
              "max": 16.7287
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 384,
              "info": {
                "type": "percent",
                "short_name": "Population with post-high school education",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education",
                "measure": "perc_post_hs_edu",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "Percent of the population self-reported to have post-high school level degree",
                "long_description": "Percent of the population self-reported to have post-high school level degree. Based on American Community Survey Table B15003 in ACS 2015/2019 5-year estimates.",
                "statement": "{value} of the population in {features.name} have a post-high school education",
                "sources": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/data/developers/data-sets/acs-5year.html"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 385,
              "mean": 0.605,
              "sd": 0.1175,
              "min": 0.4143,
              "max": 0.8654
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 176,
              "info": {
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations",
                "measure": "prevent_hosp_rate",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{value} of the hospitalizations in {features.name}  were preventable (due to conditions usually treated in outpatient settings)",
                "sources": [
                  {
                    "name": "County Health Rankings",
                    "date_accessed": 2021,
                    "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description"
                  }
                ],
                "citations": {}
              },
              "type": "float",
              "missing": 175,
              "mean": 4915.6413,
              "sd": 1551.2408,
              "min": 2106,
              "max": 15047.25
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 384,
              "info": {
                "type": "count",
                "short_name": "Primary care access (count)",
                "full_name": "primary_care_access_scores:prim_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "measure": "prim_cnt",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} primary care physicians in {features.name}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 560.4571,
              "sd": 581.3071,
              "min": 74,
              "max": 3360
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Primary care access score",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "measure": "prim_e2sfca",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0.0023,
              "sd": 0.0011,
              "min": 0.0011,
              "max": 0.0058
            },
            {
              "name": "substance_access_scores:subs_10near_median",
              "duplicates": 419,
              "info": {
                "type": "float",
                "short_name": "Substance use/behavioral health services access (drive time)",
                "full_name": "substance_access_scores:subs_10near_median",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_10near_median",
                "long_name": "Substance use/behavioral health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest substance use/behavioral health services facilities",
                "long_description": "Median drive time in minutes to the ten closest substance use/behavioral health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest substance use/behavioral health service facilities to {features.name} is {value} minutes",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 420
            },
            {
              "name": "substance_access_scores:subs_3sfca",
              "duplicates": 384,
              "info": {
                "type": "index",
                "short_name": "Substance use/behavioral health services access score",
                "full_name": "substance_access_scores:subs_3sfca",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_3sfca",
                "long_name": "Substance use/behavioral health services access score (3-step floating catchment areas)",
                "short_description": "Index of substance use/behavioral health services accessibility based on supply and demand of facilities",
                "long_description": "Substance use/behavioral health services access score based on 3-step  floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The substance use/behavioral health services accessibility score for {features.name} is {value}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 0,
              "sd": 0,
              "min": 4e-06,
              "max": 0.0001
            },
            {
              "name": "substance_access_scores:subs_cnt",
              "duplicates": 407,
              "info": {
                "type": "count",
                "short_name": "Substance use/behavioral health  access (count)",
                "full_name": "substance_access_scores:subs_cnt",
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "measure": "substance_cnt",
                "long_name": "Access to substance use/behavioral health  by count",
                "short_description": "Count of substance use/behavioral health facilities based on facility locations",
                "long_description": "Count of substance use/behavioral health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} substance use facilities in {features.name}",
                "sources": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ],
                "citations": {}
              },
              "type": "integer",
              "missing": 385,
              "mean": 5.7714,
              "sd": 3.3614,
              "min": 0,
              "max": 19
            },
            {
              "name": "trade_schools_access_scores:norm_3sfca",
              "duplicates": 396,
              "info": {
                "type": "index",
                "short_name": "Trade school access score",
                "full_name": "trade_schools_access_scores:norm_3sfca",
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores",
                "measure": "norm_3sfca",
                "long_name": "Trade school access score (3-step floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Trade school access score based on 3-step floating catchment areas. This method is an aggregation of trade school capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for trade schools (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (undergraduate).",
                "statement": "The trade school accessibility score for {features.name} is  {value}",
                "sources": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ],
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ]
              },
              "type": "float",
              "missing": 385,
              "mean": 20.4887,
              "sd": 24.1244,
              "min": 0,
              "max": 100
            },
            {
              "name": "earnings_per_job:earnings_per_job",
              "duplicates": 419,
              "info": {
                "type": "ratio",
                "short_name": "Average of earnings per job",
                "full_name": "earnings_per_job:earnings_per_job",
                "category": "Employment/Workforce Development",
                "measure_table": "earnings_per_job",
                "measure": "earnings_per_job",
                "long_name": "Earnings per job",
                "short_description": "Earnings per job.",
                "long_description": "Earnings per job is calculated based on the GDP and Personal Income table from the Bureau of Economic Analysis.",
                "statement": "Earnings per job in {features.name} is ${value}",
                "sources": [
                  {
                    "name": "Bureau of Economic Analysis",
                    "date_accessed": "2021",
                    "url": "https://apps.bea.gov/iTable/iTable.cfm?reqid=70&step=1&acrdn=6"
                  }
                ],
                "citations": {}
              },
              "type": "unknown",
              "missing": 420
            }
          ]
        },
        "_references": {
          "lou04": {
            "id": "lou04",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              }
            ],
            "year": 2004,
            "title": "Using a gis-based floating catchment method to assess areas with shortage of physicians",
            "journal": "Health & Place",
            "volume": "10",
            "number": 1,
            "page": "1-11",
            "doi": "10.1016/S1353-8292(02)00067-9"
          },
          "lou09": {
            "id": "lou09",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Yi",
                "family": "Qi"
              }
            ],
            "year": 2009,
            "title": "An enhanced two-step floating catchment area (e2sfca) method for measuring spatial accessibility to primary care physicians",
            "journal": "Health & Place",
            "volume": "15",
            "number": 4,
            "page": "1100-1107",
            "doi": "10.1016/j.healthplace.2009.06.002"
          },
          "lou03": {
            "id": "lou03",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Fahui",
                "family": "Wang"
              }
            ],
            "year": 2003,
            "title": "Measures of spatial accessibility to health care in a gis environment: synthesis and a case study in the Chicago region",
            "journal": "Environment and Planning B: Planning and Design",
            "volume": "30",
            "number": 6,
            "page": "865-884",
            "doi": "10.1068/b29120"
          },
          "saxon20": {
            "id": "saxon20",
            "author": [
              {
                "given": "James",
                "family": "Saxon"
              },
              {
                "given": "Julia",
                "family": "Koschinsky"
              },
              {
                "given": "Karina",
                "family": "Acosta"
              },
              {
                "given": "Vidal",
                "family": "Anguiano"
              },
              {
                "given": "Luc",
                "family": "Anselin"
              },
              {
                "given": "Sergio",
                "family": "Rey"
              }
            ],
            "year": 2020,
            "title": "An Open Software Environment to Make Spatial Access Metrics More Accessible",
            "journal": "University of Chicago: Center for Spatial Data Science",
            "volume": "Preprint",
            "doi": "10.13140/RG.2.2.12396.28807"
          },
          "gallardo20": {
            "id": "gallardo20",
            "author": [
              {
                "given": "Robert",
                "family": "Gallardo"
              }
            ],
            "year": 2020,
            "title": "Digital Divide Index",
            "journal": "Purdue Center for Regional Development",
            "url": "http://pcrd.purdue.edu/ddi"
          },
          "liang17": {
            "id": "liang17",
            "author": [
              {
                "given": "Lan",
                "family": "Liang"
              },
              {
                "given": "Cindy",
                "family": "Branch"
              }
            ],
            "year": 2017,
            "title": "Health Literacy Universal Precautions Are Still a Distant Dream: Analysis of U.S. Data on Health Literate Practices",
            "journal": "Health Literacy Research and Practice",
            "volume": "1",
            "number": 4,
            "page": "e216-e230",
            "doi": "10.3928/24748307-20170929-01"
          },
          "savitz20": {
            "id": "savitz20",
            "author": [
              {
                "given": "Samuel",
                "family": "Savitz"
              },
              {
                "given": "Stacy",
                "family": "Bailey"
              },
              {
                "given": "Stacie",
                "family": "Dusetzina"
              },
              {
                "given": "W.",
                "family": "Schuyler Jones"
              },
              {
                "given": "Justin",
                "family": "Trogdon"
              },
              {
                "given": "Sally",
                "family": "Stearns"
              }
            ],
            "year": 2020,
            "title": "Treatment selection and medication adherence for stable angina: The role of area-based health literacy",
            "journal": "Journal of Evaluation in Clinical Practice",
            "volume": "26",
            "number": 6,
            "page": "1711-1721",
            "doi": "10.1111/jep.13341"
          }
        },
        "site_file": "district.json"
      }
    },
    "files": ["tract.csv", "county.csv", "health_district.csv"]
  },
  "rules": [
    {
      "condition": [
        {
          "id": "starting_shapes",
          "type": "=",
          "value": "district",
          "any": false
        }
      ],
      "effects": {
        "display": "sec31"
      }
    },
    {
      "condition": [
        {
          "id": "starting_shapes",
          "type": "=",
          "value": "county",
          "any": true
        },
        {
          "id": "selected_district",
          "type": "",
          "value": "",
          "any": true
        }
      ],
      "effects": {
        "display": "sec32"
      }
    }
  ],
  "variables": [
    {
      "id": "shapes",
      "states": [
        {
          "condition": [
            {
              "id": "starting_shapes",
              "type": "=",
              "value": "district",
              "any": false
            },
            {
              "id": "selected_district",
              "type": "!",
              "value": "",
              "any": false
            }
          ],
          "value": "district"
        },
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": "",
              "any": false
            }
          ],
          "value": "tract"
        }
      ],
      "default": "county"
    },
    {
      "id": "region_select",
      "states": [
        {
          "condition": [
            {
              "id": "shapes",
              "type": "=",
              "value": "county",
              "any": false
            }
          ],
          "value": "selected_county"
        }
      ],
      "default": "selected_district"
    },
    {
      "id": "selected_region",
      "states": [
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": "",
              "any": false
            }
          ],
          "value": "selected_county"
        }
      ],
      "default": "selected_district"
    }
  ],
  "dataviews": {
    "primary_view": {
      "palette": "",
      "y": "selected_variable",
      "x": "selected_year",
      "time_agg": "selected_year",
      "time_filters": [
        {
          "variable": "time",
          "type": ">=",
          "value": "min_year"
        },
        {
          "variable": "time",
          "type": "<=",
          "value": "max_year"
        }
      ],
      "dataset": "shapes",
      "ids": "selected_region",
      "features": {
        "type": "region_type"
      },
      "variables": [
        {
          "variable": "selected_variable",
          "type": "<=",
          "value": "variable_min"
        },
        {
          "variable": "selected_variable",
          "type": ">=",
          "value": "variable_max"
        }
      ]
    }
  },
  "info": {
    "variable_info_pane": {
      "title": "variables.short_name",
      "body": [
        {
          "name": "Year",
          "value": "data.time",
          "style": "table"
        },
        {
          "name": "",
          "value": "variables.sources",
          "style": "table"
        }
      ],
      "default": [],
      "floating": false,
      "dataview": "primary_view",
      "variable_info": false
    },
    "info11": {
      "title": "features.name",
      "body": [],
      "default": {
        "title": "Virginia",
        "body": "Hover over or select a region for more information."
      },
      "floating": false,
      "dataview": "primary_view",
      "subto": ["main_map", "main_plot", "rank_table"],
      "variable_info": false
    },
    "info12": {
      "title": "",
      "body": [
        {
          "name": "Region Type",
          "value": "features.type",
          "style": "table"
        },
        {
          "name": "variables.long_name",
          "value": "selected_variable",
          "style": "stack"
        },
        {
          "name": "",
          "value": "variables.statement",
          "style": "table"
        }
      ],
      "default": [],
      "floating": false,
      "dataview": "primary_view",
      "subto": ["main_map", "main_plot", "rank_table"],
      "variable_info": false
    }
  },
  "text": {
    "text7": {
      "text": [
        {
          "condition": [
            {
              "id": "starting_shapes",
              "type": "=",
              "value": "county",
              "any": false
            }
          ],
          "button": {
            "b1": {
              "text": [
                "Virginia"
              ],
              "type": "reset",
              "target": "selected_county"
            }
          },
          "text": ["State: ", "b1"]
        },
        {
          "condition": [
            {
              "id": "starting_shapes",
              "type": "=",
              "value": "district",
              "any": false
            }
          ],
          "button": {
            "b1": {
              "text": [
                "Virginia"
              ],
              "type": "reset",
              "target": "selected_district"
            }
          },
          "text": ["State: ", "b1"]
        },
        {
          "condition": [
            {
              "id": "selected_district",
              "type": "",
              "value": "",
              "any": false
            }
          ],
          "button": {
            "b1": {
              "text": [
                "",
                "selected_district"
              ],
              "type": "reset",
              "target": "selected_county"
            }
          },
          "text": [" > Health District: ", "b1"]
        },
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": "",
              "any": false
            }
          ],
          "text": [" > ", "selected_county"]
        }
      ]
    },
    "text8": {
      "text": [
        [
          {
            "text": "Virginia Counties",
            "condition": [
              {
                "id": "default",
                "type": "",
                "value": "",
                "any": false
              }
            ]
          },
          {
            "text": "Virginia Health Districts",
            "condition": [
              {
                "id": "starting_shapes",
                "type": "=",
                "value": "district",
                "any": false
              }
            ]
          },
          {
            "text": ["selected_district", " Counties"],
            "condition": [
              {
                "id": "selected_district",
                "type": "",
                "value": "",
                "any": false
              }
            ]
          },
          {
            "text": ["selected_county", " Census Tracts"],
            "condition": [
              {
                "id": "selected_county",
                "type": "",
                "value": "",
                "any": false
              }
            ]
          }
        ]
      ]
    }
  },
  "select": {
    "selected_variable": {
      "category": "variable_type"
    }
  },
  "tables": {
    "table18": {
      "scrollY": 400,
      "rowGroup": {
        "dataSrc": "entity.features.name"
      },
      "columnDefs": [
        {
          "targets": "entity.features.name",
          "visible": false
        }
      ],
      "buttons": ["copy", "csv", "excel", "print"],
      "dom": "<'row't><'row'<'col-sm'B><'col'f>>",
      "features": [
        {
          "name": "id",
          "title": "ID"
        },
        {
          "name": "name",
          "title": "Name"
        },
        {
          "name": "type",
          "title": "Type"
        }
      ],
      "filters": {
        "category": "variable_type"
      },
      "single_variable": false,
      "wide": false,
      "paging": false,
      "scrollX": 500,
      "scrollCollapse": true
    },
    "rank_table": {
      "info": false,
      "searching": false,
      "scrollY": 455,
      "variables": "selected_variable",
      "subto": ["main_map", "main_plot"],
      "single_variable": true,
      "wide": true,
      "paging": false,
      "scrollX": 500,
      "scrollCollapse": true
    }
  },
  "plots": {
    "main_plot": {
      "layout": {
        "showlegend": false,
        "xaxis": {
          "title": false,
          "fixedrange": true
        },
        "yaxis": {
          "fixedrange": true,
          "zeroline": false
        },
        "hovermode": "closest",
        "margin": {
          "t": 25,
          "r": 10,
          "b": 40,
          "l": 60
        }
      },
      "config": {
        "modeBarButtonsToRemove": ["select2d", "lasso2d", "sendDataToCloud"],
        "showSendToCloud": false,
        "responsive": true,
        "showTips": false,
        "displaylogo": false,
        "modeBarButtonsToAdd": ["hoverclosest", "hovercompare"]
      },
      "data": [
        {
          "type": "plot_type",
          "hoverinfo": "text",
          "mode": "lines+markers",
          "showlegend": false,
          "marker.line.color": "#767676",
          "marker.line.width": 1
        },
        {
          "type": "box",
          "fillcolor": "transparent",
          "mode": "lines+markers",
          "showlegend": false,
          "name": "Summary",
          "marker.line.color": "#767676",
          "marker.line.width": 1
        }
      ],
      "subto": ["main_map", "rank_table"]
    }
  },
  "maps": {
    "main_map": {
      "shapes": [
        {
          "name": "tract",
          "url": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/tract.geojson",
          "id_property": "id"
        },
        {
          "name": "county",
          "url": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/county.geojson",
          "id_property": "id"
        },
        {
          "name": "district",
          "url": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/district.geojson",
          "id_property": "id"
        }
      ],
      "options": {
        "attributionControl": false,
        "scrollWheelZoom": false,
        "center": [38, -79.5],
        "zoom": 7,
        "height": "430px",
        "subto": ["main_plot", "rank_table"],
        "background_shapes": "county"
      },
      "tiles": {
        "light": {
          "url": "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        },
        "dark": {
          "url": "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        }
      }
    },
    "_raw": []
  },
  "legends": {
    "legend14": {
      "palette": "settings.palette",
      "subto": ["main_map", "main_plot"]
    }
  },
  "credits": {
    "bootstrap": {
      "name": "Bootstrap",
      "url": "https://getbootstrap.com",
      "version": "5.1.3"
    },
    "leaflet": {
      "name": "Leaflet",
      "url": "https://leafletjs.com",
      "version": "1.7.1",
      "description": "A JS library for interactive maps"
    },
    "Stamen toner-light": {
      "name": "Stamen toner-light",
      "url": "https://stamen.com",
      "description": "Light-theme map tiles by Stamen Design"
    },
    "CARTO Dark Matter": {
      "name": "CARTO Dark Matter",
      "url": "https://carto.com/attributions",
      "description": "Dark-theme map tiles by CARTO"
    },
    "OpenStreetMap": {
      "name": "OpenStreetMap",
      "url": "https://www.openstreetmap.org/copyright"
    },
    "plotly": {
      "name": "Plotly",
      "url": "https://plotly.com/javascript/getting-started",
      "version": "2.8.3"
    },
    "datatables": {
      "name": "DataTables",
      "url": "https://datatables.net",
      "version": "1.11.4"
    }
  }
}
