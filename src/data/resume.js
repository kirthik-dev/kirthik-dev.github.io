import { FaPython, FaDatabase, FaAws, FaDocker, FaLinux, FaBrain, FaServer, FaChartLine, FaGitAlt } from 'react-icons/fa';
import { SiApachespark, SiGooglecloud, SiSnowflake, SiApacheairflow, SiDbt, SiPandas, SiNumpy, SiFastapi, SiSqlalchemy, SiApachehadoop, SiApachekafka } from 'react-icons/si';

export const resumeData = {
    name: "Kirthik B",
    title: "Data Engineer",
    contact: {
        phone: "+91 8870914014",
        email: "kirthik0071@gmail.com",
        linkedin: "https://www.linkedin.com/in/kirthik-b-646723214/",
        github: "https://github.com/kirthik-dev",
        portfolio: "https://kirthik-dev.github.io",
        location: "India"
    },
    summary: "Data Engineer with more than1.8 years of hands-on experience building ETL pipelines using PySpark and GCP. Worked on data quality frameworks, metadata-driven profiling systems, and dbt automation. Familiar with Spark optimization and graph-based metadata modeling. Currently looking for new opportunities to grow and contribute to data engineering teams.",

    skillCategories: [
        {
            category: "Programming & Development",
            skills: ["Python", "SQL (CTEs, Window Functions)", "pandas", "NumPy", "FastAPI", "SQLAlchemy", "Git"]
        },
        {
            category: "Big Data & Cloud",
            skills: ["Apache Spark", "PySpark", "Spark SQL", "GCP", "Dataproc", "BigQuery", "Snowflake", "GCS", "HDFS", "Airflow (Cloud Composer)"]
        },
        {
            category: "Data Engineering",
            skills: ["ETL/ELT Pipelines", "Data Quality", "Data Profiling", "Data Modeling", "dbt", "Dgraph (Graph DB)"]
        },
        {
            category: "DevOps & Tools",
            skills: ["Docker", "Linux", "HDFS CLI", "Environment Management", "Pytest", "Log4j"]
        },
        {
            category: "AI & Automation",
            skills: ["Agentic AI", "Autogen", "LangChain", "LLM-based Workflow Automation"]
        }
    ],

    skills: [
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
        { name: "SQL", icon: FaDatabase, color: "#336791" },
        { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
        { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
        { name: "BigQuery", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
        { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
        { name: "dbt", icon: SiDbt, color: "#FF694B" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Linux", icon: FaLinux, color: "#FCC624" },
        { name: "pandas", icon: SiPandas, color: "#150458" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],

    experience: [
        {
            role: "Associate Data Engineer",
            company: "YLogx Private Limited",
            location: "Remote",
            duration: "Aug 2024 – Present",
            description: [
                "Built a PySpark-driven production data quality engine handling 10M+ records/hour with 40+ validation rules, significantly improving data accuracy.",
                "Designed a metadata-based profiling system tracking 25+ quality metrics across 500+ tables, enabling automated monitoring and anomaly detection.",
                "Developed a Dgraph-backed metadata service modeling 500+ schema relationships across 12 databases for real-time lineage and dependency insights.",
                "Implemented LLM-assisted SQL and dbt automation workflows to streamline complex transformation logic and reduce manual effort."
            ]
        },
        {
            role: "Research Intern – Population Forecasting",
            company: "NIT Trichy",
            location: "Trichy, Tamil Nadu",
            duration: "Jun 2023 – Jul 2023",
            description: [
                "Analyzed population trends near nuclear facilities using Python, pandas, NumPy, and scikit-learn to support long-term planning.",
                "Enhanced regression performance using K-Fold Cross Validation and GridSearchCV, achieving a 10–15% reduction in RMSE.",
                "Forecasted a projected 12% annual population growth within a 10 km region, aiding infrastructure planning for 150K+ residents."
            ]
        }
    ],

    education: [
        {
            institution: "NIT Tiruchirappalli",
            degree: "B.Tech in Mechanical Engineering (Minor in Computer Applications)",
            duration: "Nov 2020 – May 2024",
            coursework: "Data Structures, Data Analytics, Big Data Analytics, Machine Learning, Operating Systems"
        }
    ],

    projects: [
        {
            title: "Lending Club Risk Assessment Pipeline",
            tech: ["PySpark", "Dataproc", "Hive", "Pytest", "Log4j"],
            shortDescription: "A PySpark Big Data project implementing a robust ETL pipeline to cleanse raw customer and loan data, calculate a crucial weighted Loan Score (45% default history, 35% financial health, 20% repayment history), and provision secure, queryable data structures for downstream consumption.",
            description: [
                "Built an efficient, scalable data pipeline to analyze customer and loan data, calculating a risk-factor Loan Score for applicants.",
                "Extracted data from massive raw files to create four fundamental datasets: customers_data, loans_data, loan_repayments, and loan_defaulters.",
                "Generated unique emp_id using SHA-2 cryptographic hash function with concat_ws across nine key customer columns.",
                "Implemented comprehensive data cleaning: schema enforcement, null handling, duplicate removal, and regex-based string standardization.",
                "Created bad data management process to isolate member IDs with multiple records, preparing files for upstream correction.",
                "Stored final cleaned data in CSV and Parquet formats, accessible via Permanent External Tables and Consolidated Views.",
                "Calculated weighted Loan Score based on: Defaulters History (45%), Financial Health (35%), and Repayment History (20%)."
            ],
            github: "https://github.com/kirthik-dev/Lending-Club-Loan-Analytics-Pipeline",
            icon: FaChartLine,
            featured: true
        },
        {
            title: "Olist E-commerce Analytics Pipeline",
            tech: ["PySpark", "HDFS", "GCS", "Parquet", "Hive", "Python"],
            shortDescription: "A comprehensive data engineering and analytics solution transforming raw transactional data from a Brazilian ecommerce platform into actionable business insights, demonstrating expertise in data ingestion, processing, cleaning, and exploratory analysis.",
            description: [
                "Built end-to-end ETL workflow automating extraction of complex datasets, transformation into unified data model, and loading into analyzable formats.",
                "Implemented advanced data cleaning: missing value handling, outlier detection, consistency checks, and normalization for high-quality datasets.",
                "Engineered features including customer lifetime value, order frequency, and product popularity to enrich downstream analytics.",
                "Performed exploratory data analysis to uncover trends, seasonality, customer behaviors, product performance, and operational bottlenecks.",
                "Delivered curated datasets (Parquet, Hive, CSV) for dashboards covering 27 Brazilian states with 99.8% data completeness.",
                "Improved runtime by 35% through shuffle partition tuning and broadcast join optimization."
            ],
            github: "https://github.com/kirthik-dev/olist-ecommerce-analytics-pipeline",
            icon: FaServer,
            featured: true
        },
        {
            title: "NYC Yellow Taxi Trip GCP Pipeline",
            tech: ["GCP", "BigQuery", "Airflow", "PySpark", "Cloud Composer", "Cloud Storage"],
            shortDescription: "A robust, production-ready data engineering project leveraging Python and Google Cloud Platform to process, analyze, and visualize 77M+ taxi trip records with automated ETL processes and geospatial analysis capabilities.",
            description: [
                "Built cloud-native architecture using Google Cloud Storage and BigQuery to handle ingest, storage, and querying of 77M+ taxi records.",
                "Implemented 4-layer data architecture: Landing (GCS), Processing (HDFS), Curated (GCS), Serving (BigQuery).",
                "Automated ETL processes for extracting raw data, transforming/cleaning geospatial coordinates, and loading into analytics-ready tables.",
                "Cleaned 77M records, removing 5M invalid entries, and created analytical features (tip %, distance buckets, time-of-day segments).",
                "Integrated geospatial analysis including pickup/drop-off hotspot analysis, route popularity, and duration/distance profiling.",
                "Automated monthly ingestion using Cloud Composer (Airflow) with modular, extensible code design."
            ],
            github: "https://github.com/kirthik-dev/NYC-Yellow-Taxi-Trip-Data-GCP-Pipeline",
            icon: FaDatabase,
            featured: true
        },
        {
            title: "Spotify User Behavior Analytics Pipeline",
            tech: ["Python", "Data Analytics", "Machine Learning", "Visualization"],
            shortDescription: "A complete data analytics pipeline focused on Spotify user behavior data, uncovering trends in listening habits including genre preferences, session durations, and skip rates.",
            description: [
                "Built data extraction and ingestion modules for collecting raw music listening logs and user interaction data.",
                "Implemented preprocessing and cleaning to remove noise, handle missing values, and standardize data for analysis.",
                "Applied Python-driven statistical techniques and ML to uncover trends in genre preferences, repeat listens, and session durations.",
                "Generated detailed reports and visualizations: heatmaps, time-series charts, and dashboards for user engagement insights.",
                "Extensible for recommendation systems, churn prediction, or targeted marketing campaigns."
            ],
            github: "https://github.com/kirthik-dev/Spotify-User-Behavior-Analytics-Pipeline",
            icon: FaChartLine,
            featured: false
        },
        {
            title: "Scalable Uber Data Analytics on GCP",
            tech: ["GCP", "Jupyter Notebook", "Python", "Cloud Storage", "Dataflow"],
            shortDescription: "A scalable, cloud-based analytics solution for Uber ride data using GCP services, designed to auto-scale with increased data ingestion rates for enterprise-level analytics.",
            description: [
                "Built cloud integration using GCP services for data storage, processing, and scaling of large volumes of ride data.",
                "Implemented data pipeline stages: ingestion via Cloud Storage, transformation with geospatial/temporal features, and advanced analytics.",
                "Performed exploratory data analysis to uncover surge pricing patterns, trip durations, passenger segments, and operational bottlenecks.",
                "Created interactive Jupyter Notebook dashboards for sharing findings with decision makers.",
                "Designed auto-scaling architecture suitable for enterprise-level analytics and forecasting."
            ],
            github: "https://github.com/kirthik-dev/Scalable-Uber-Data-Analytics-Pipeline-on-GCP",
            icon: FaServer,
            featured: false
        },
        {
            title: "Budget Optimization Tool",
            tech: ["HTML", "Python", "Jupyter Notebook", "Data Visualization"],
            shortDescription: "A project combining web development and data science to facilitate budget planning and optimization with interactive visualization and analytical depth.",
            description: [
                "Built interactive web interface with HTML for robust visualization and user-friendly forms to capture financial data.",
                "Developed analytical engine using Python and Jupyter Notebooks for optimization algorithms and scenario analysis.",
                "Implemented budget allocation features to help users allocate across categories and visualize impact with charts.",
                "Applied data-driven optimization techniques (linear programming/heuristics) for optimal resource usage.",
                "Enabled scenario analysis to simulate different expense scenarios and observe potential outcomes."
            ],
            github: "https://github.com/kirthik-dev/budget-optimization",
            icon: FaBrain,
            featured: false
        }
    ],

    certifications: [
        {
            name: "Big Data Engineering Masters Program",
            issuer: "Instructor: Sumit Mittal",
            date: "Aug 2025 – Present (Ongoing)",
            details: "Completed: Big Data Fundamentals, Apache Spark (RDDs, DataFrames, SQL), Performance Tuning. Upcoming: Hive, Databricks, ADF, Kafka Streaming, AWS Glue, EMR, Redshift."
        }
    ]
};
