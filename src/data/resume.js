import {
  FaChartLine,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaServer,
} from 'react-icons/fa';
import {
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiDbt,
  SiFastapi,
  SiGooglecloud,
  SiPostgresql,
  SiSnowflake,
} from 'react-icons/si';

export const resumeData = {
  name: 'Kirthik B',
  title: 'Data Engineer',
  location: 'India',
  contact: {
    phone: '+91 8870914014',
    email: 'kirthik0071@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kirthik-b-646723214/',
    github: 'https://github.com/kirthik-dev',
    portfolio: 'https://kirthik-dev.github.io',
    location: 'India',
  },
  hero: {
    eyebrow: 'Available for data engineering roles',
    headline: 'Building reliable data pipelines, warehouse models, and analytics systems that hold up in production.',
    description:
      'Data Engineer with 2+ years of hands-on experience across PySpark, SQL, Snowflake, dbt, Azure, and GCP. I focus on clean ingestion, trustworthy transformations, quality-first delivery, and serving data products that teams can actually use.',
    metrics: [
      { value: '2+ years', label: 'Production data engineering experience' },
      { value: '~40%', label: 'Faster dataset onboarding through metadata-driven quality' },
      { value: '50+ hrs', label: 'Manual mapping work saved through ETL automation' },
      { value: '3 flagship builds', label: 'Strong portfolio case studies for data roles' },
    ],
  },
  summary:
    'I build ETL and ELT pipelines, warehouse-ready models, and data quality workflows for teams that need dependable analytics foundations. My strongest work sits at the intersection of Python, SQL, PySpark, Snowflake, dbt, and cloud data platforms, with AI used carefully as a supporting accelerator rather than the headline.',
  profileHighlights: [
    {
      title: 'Production-minded data engineering',
      description:
        'I design for ingestion, transformation, validation, serving, and maintenance instead of treating pipelines as one-off scripts.',
    },
    {
      title: 'Warehouse and lakehouse thinking',
      description:
        'My work consistently moves toward curated models, medallion patterns, dimensional design, and analyst-ready outputs.',
    },
    {
      title: 'Honest automation',
      description:
        'I use AI for SQL assistance, workflow acceleration, and rule generation where it helps, without overstating it as autonomous magic.',
    },
  ],
  featuredStats: [
    {
      value: 'Snowflake + dbt',
      label: 'Transformation workflows for production OLAP use cases',
    },
    {
      value: 'PySpark + SQL',
      label: 'Core stack for pipeline logic, validation, and large-scale processing',
    },
    {
      value: 'Azure + GCP',
      label: 'Cloud experience spanning lakehouse and distributed batch systems',
    },
  ],
  focusAreas: [
    {
      title: 'Pipeline engineering',
      description:
        'ETL and ELT flows for ingestion, curation, and analytics-ready serving layers.',
    },
    {
      title: 'Quality and governance',
      description:
        'Metadata-driven validation, repeatable checks, and traceable data movement.',
    },
    {
      title: 'Warehouse modeling',
      description:
        'Kimball-style marts, fact-dimension modeling, and trusted reporting layers.',
    },
    {
      title: 'Cloud execution',
      description:
        'Hands-on delivery across Azure Databricks, ADLS, Snowflake, GCP Dataproc, and Composer.',
    },
  ],
  skillCategories: [
    {
      category: 'Data Platforms',
      emphasis: 'Batch and near-real-time data processing foundations',
      skills: ['PySpark', 'Spark SQL', 'SQL', 'Python', 'PostgreSQL', 'FastAPI'],
    },
    {
      category: 'Warehousing and Modeling',
      emphasis: 'Curated analytics structures and transformation workflows',
      skills: [
        'Snowflake',
        'dbt',
        'Dimensional Modeling',
        'Star Schema',
        'OLAP',
        'Data Warehousing',
      ],
    },
    {
      category: 'Orchestration and Quality',
      emphasis: 'Reliable data movement with validation and operational control',
      skills: [
        'Apache Airflow',
        'Great Expectations',
        'Lakeflow Declarative Pipelines',
        'CI/CD',
        'Data Quality',
        'Monitoring',
      ],
    },
    {
      category: 'Cloud and Storage',
      emphasis: 'Cloud-native processing and analytical storage layers',
      skills: [
        'Azure Databricks',
        'ADLS Gen2',
        'Azure Data Factory',
        'GCP Dataproc',
        'BigQuery',
        'Parquet',
      ],
    },
    {
      category: 'Supporting Automation',
      emphasis: 'Useful secondary capabilities that speed up engineering work',
      skills: [
        'AI-assisted SQL review',
        'Metadata-driven rule generation',
        'Workflow automation',
        'GitHub Actions',
      ],
    },
  ],
  skills: [
    { name: 'Python', icon: FaPython, color: '#8cc8ff' },
    { name: 'PySpark', icon: SiApachespark, color: '#ff8b66' },
    { name: 'SQL', icon: FaDatabase, color: '#7ed7c1' },
    { name: 'Snowflake', icon: SiSnowflake, color: '#80e4ff' },
    { name: 'dbt', icon: SiDbt, color: '#ff9f70' },
    { name: 'Airflow', icon: SiApacheairflow, color: '#7ea8ff' },
    { name: 'Azure', icon: FaServer, color: '#76b4ff' },
    { name: 'GCP', icon: SiGooglecloud, color: '#95b8ff' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#9bb4ff' },
    { name: 'FastAPI', icon: SiFastapi, color: '#8ff0c7' },
    { name: 'Kafka', icon: SiApachekafka, color: '#f2c879' },
    { name: 'Docker', icon: FaDocker, color: '#8ec5ff' },
    { name: 'Git', icon: FaGitAlt, color: '#ff8f73' },
  ],
  experience: [
    {
      role: 'Data Engineer',
      company: 'YLogx Private Limited',
      location: 'Remote',
      duration: 'Aug 2024 - Present',
      summary:
        'Client-facing data engineering work spanning metadata-driven quality systems, Snowflake and dbt transformations, and analytics-serving layers.',
      stack: ['Python', 'PySpark', 'PostgreSQL', 'Snowflake', 'dbt', 'FastAPI'],
      description: [
        'Engineered a metadata-driven data quality platform using Python, PySpark, and a PostgreSQL-backed validation engine, reducing new dataset onboarding time by about 40 percent.',
        'Automated ETL and ELT pipeline generation for schema-mapping workflows, saving more than 50 manual mapping hours per project.',
        'Developed dbt-to-Snowflake transformation workflows and AI-assisted SQL review flows that improved query quality for production-grade OLAP workloads.',
        'Built near real-time analytics-serving layers on PostgreSQL and FastAPI for KPI reporting, forecasting use cases, and downstream operational analytics.',
      ],
    },
    {
      role: 'Research Intern - Population Forecasting',
      company: 'NIT Trichy',
      location: 'Trichy, Tamil Nadu',
      duration: 'Jun 2023 - Jul 2023',
      summary:
        'Applied data preparation and statistical forecasting techniques to demographic planning datasets.',
      stack: ['Python', 'pandas', 'NumPy', 'Forecasting'],
      description: [
        'Processed and modeled demographic datasets in Python, building clean analytical inputs for forecasting workflows.',
        'Identified about 12 percent annual population growth in the study region through statistical modeling and reporting.',
        'Delivered results through structured analysis and visuals that supported planning discussions around regional infrastructure needs.',
      ],
    },
  ],
  education: [
    {
      institution: 'NIT Tiruchirappalli',
      degree: 'B.Tech in Mechanical Engineering with a Minor in Computer Applications',
      duration: 'Nov 2020 - May 2024',
      coursework:
        'Data Structures, Data Analytics, Big Data Analytics, Machine Learning, Operating Systems',
    },
  ],
  certifications: [
    {
      name: 'Big Data Engineering Masters Program',
      issuer: 'Trendytech Academy',
      date: '2025 - Present',
      details:
        'Focused on Spark, Databricks, Azure data services, SQL performance, and modern data engineering foundations.',
    },
  ],
  learningFocus: [
    'Deeper Spark optimization and distributed systems tradeoffs',
    'Stronger warehouse design patterns for analytics engineering workflows',
    'Production-quality orchestration, validation, and operational observability',
  ],
  projects: [
    {
      title: 'Healthcare CDC Pipeline',
      category: 'Azure Lakehouse / CDC',
      tech: ['Azure Databricks', 'PySpark', 'Delta Lake', 'ADLS Gen2', 'ADF', 'Event Hubs'],
      shortDescription:
        'Snapshot-based CDC pipeline on Azure Databricks with Delta MERGE upserts, medallion layers, and Kimball-style serving models.',
      impact: '18 healthcare tables ingested into Bronze, CDC-applied Silver, and analytics-ready Gold marts with an auditable trail.',
      metrics: ['18 source tables', '344K+ rows', '7 Gold aggregations'],
      description: [
        'Architected a Bronze-Silver-Gold lakehouse on Azure Databricks using ADLS Gen2 and Delta Lake for synthetic healthcare data.',
        'Implemented snapshot CDC by comparing day-over-day datasets, publishing change events to Azure Event Hubs, and applying Delta MERGE upserts in the Silver layer.',
        'Built Kimball-style dimensional models with 4 dimension and 4 fact tables, plus 7 Gold analytics aggregations for downstream reporting use cases.',
        'Added CI/CD with GitHub Actions, 10 pytest checks, and audit fields such as _event_id and _cdc_operation for traceability and compliance-style reporting.',
      ],
      github: 'https://github.com/kirthik-dev',
      icon: FaServer,
      featured: true,
      note: 'CDC is snapshot-based and the dataset is Synthea synthetic healthcare data.',
    },
    {
      title: 'RetailPulse',
      category: 'Streaming + Batch Lakehouse',
      tech: ['Kafka', 'Spark Structured Streaming', 'Airflow', 'Great Expectations', 'PostgreSQL'],
      shortDescription:
        'Retail data platform combining Kafka streaming, Airflow batch orchestration, Great Expectations validation, and PostgreSQL serving marts.',
      impact: 'Built for minute-level freshness, operational alerting, and full pipeline traceability across streaming and batch flows.',
      metrics: ['4 Kafka topics', '6 serving marts', '100% traceability'],
      description: [
        'Designed a Bronze-Silver-Gold data platform that ingests retail events from Kafka and reference data from batch loaders into a unified lakehouse flow.',
        'Standardized current-state Silver tables and enforced validation gates with Great Expectations before publishing downstream Gold outputs.',
        'Published 6 curated PostgreSQL serving marts and exposed the system through a FastAPI layer and React command-center style interface.',
        'Maintained full operational traceability with metadata capture, alert tables, and minute-level freshness for monitoring-oriented use cases.',
      ],
      github: 'https://github.com/kirthik-dev',
      icon: FaChartLine,
      featured: true,
      note: 'Runs locally with Docker Compose and MinIO rather than on managed cloud infrastructure.',
    },
    {
      title: 'Real-World E-Commerce Analytics Pipeline',
      category: 'Distributed Batch Analytics',
      tech: ['PySpark', 'HDFS', 'GCP Dataproc', 'Cloud Composer', 'Hive', 'Parquet'],
      shortDescription:
        'Distributed batch ELT pipeline on Spark and Dataproc, joining marketplace entities into a unified analytical fact model.',
      impact: 'Processed 9 source datasets into enriched analytical outputs with tuned joins, feature engineering, and warehouse-friendly serving formats.',
      metrics: ['9 source datasets', '99,441+ records', '6+ derived KPI features'],
      description: [
        'Built an end-to-end batch ELT workflow on GCP Dataproc that ingests 9 Olist marketplace datasets into HDFS and curated analytical outputs.',
        'Integrated orders, payments, logistics, reviews, and customer data through a 7-way join into a unified analytical fact structure.',
        'Improved Spark execution with broadcast joins, adaptive query execution, and tuned shuffle partitions to reduce distributed processing overhead.',
        'Served the final datasets through Parquet, Hive, and GCS outputs for scalable downstream analytics and warehouse-style consumption.',
      ],
      github: 'https://github.com/kirthik-dev/olist-ecommerce-analytics-pipeline',
      icon: FaDatabase,
      featured: true,
      note: 'This project is batch-only Spark processing and is not presented as a streaming or monitoring system.',
    },
    {
      title: 'Lending Club Risk Assessment Pipeline',
      category: 'Batch ETL and Scoring',
      tech: ['PySpark', 'Dataproc', 'Hive', 'Parquet', 'Python'],
      shortDescription:
        'Batch pipeline for cleansing large loan datasets, isolating bad records, and producing downstream-ready risk scoring outputs.',
      impact: 'Structured raw lending data into queryable assets and a weighted loan score model for downstream analytical use.',
      metrics: ['4 core datasets', 'Weighted scoring logic', 'Parquet + Hive outputs'],
      description: [
        'Extracted and standardized customer and loan data into reusable analytical datasets for downstream consumption.',
        'Handled schema enforcement, null treatment, duplicate removal, and bad-record isolation before producing curated outputs.',
        'Calculated a weighted loan score using default history, financial health, and repayment behavior signals.',
      ],
      github: 'https://github.com/kirthik-dev/Lending-Club-Loan-Analytics-Pipeline',
      icon: FaChartLine,
      featured: false,
      note: 'A supporting project in the portfolio, not the main showcase for data engineering applications.',
    },
  ],
};
