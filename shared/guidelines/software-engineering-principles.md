# Architect AI Agent Ruleset

1. Core Design Principles

    Single Responsibility Principle (SRP) – High Priority
        Rule: Every module, class, or component must have a single, well-defined responsibility and one reason to change.
        Enforcement: Regularly review modules to confirm clear boundaries and responsibilities.

    Open/Closed Principle (OCP)
        Rule: Software entities must be open for extension but closed for modification.
        Enforcement: Use abstractions (interfaces, abstract classes) to enable new functionality without altering existing code.

    Dependency Inversion Principle (DIP)
        Rule: High-level modules must depend on abstractions, not on concrete implementations.
        Enforcement: Implement dependency injection mechanisms to decouple modules and facilitate testing and maintenance.

    High Cohesion and Low Coupling – High Priority
        Rule: Design modules so that their internal elements are strongly related (high cohesion) and minimize dependencies between modules (low coupling).
        Enforcement: Periodically analyze module interactions and refactor to minimize cross-module dependencies.

    Don’t Repeat Yourself (DRY) & Keep It Simple, Stupid (KISS) – High Priority
        Rule: Avoid code duplication and unnecessary complexity; always aim for simple, straightforward solutions.
        Enforcement: Refactor duplicated logic into shared modules and continuously seek simpler implementations.

    Interface Segregation Principle (ISP) – High Priority
        Rule: Design narrow, purpose-specific interfaces rather than large, generalized ones.
        Enforcement: Regularly evaluate interfaces to ensure they expose only what is necessary for their clients.

2. Quality Assurance Practices

    Test-Driven Development (TDD)
        Rule: Write tests before coding to define clear requirements and ensure that all components meet their expected behavior.
        Enforcement: Integrate unit, integration, and acceptance testing into the development cycle.

    Continuous Integration/Continuous Deployment (CI/CD)
        Rule: Integrate and deploy changes frequently to detect issues early and ensure rapid delivery.
        Enforcement: Use automated CI/CD pipelines and enforce code integration rules to maintain system integrity.

    Code Reviews
        Rule: Conduct regular peer reviews to ensure adherence to the architectural ruleset and coding best practices.
        Enforcement: Implement structured code review checklists focused on SRP, OCP, DIP, DRY, and KISS.

3. Advanced Architectural Practices

    Domain-Driven Design (DDD)
        Rule: Structure the system according to business domains using bounded contexts that encapsulate domain logic.
        Enforcement: Align modules with business capabilities and facilitate clear communication between domains via domain events.

    Modular Architectures (Microservices / Modular Monolith)
        Rule: Decompose the system into independent, well-defined modules or services that communicate through standardized APIs or event-driven architectures.
        Enforcement: Regularly review service boundaries and refactor monolithic systems into more granular, decoupled services when applicable.

    Design Patterns and Best Practices
        Rule: Apply proven design patterns (e.g., Factory, Strategy, Observer, Repository) to solve recurring design problems.
        Enforcement: Document pattern usage in architecture decision records (ADRs) and ensure consistency across the codebase.

4. Non-Functional Requirements

    Scalability & Performance
        Rule: Architect systems to scale efficiently and perform under load.
        Enforcement: Use caching strategies, load balancing, asynchronous processing, and performance monitoring tools.

    Security & Resilience
        Rule: Incorporate security best practices at every layer and design for resiliency, including failure recovery and graceful degradation.
        Enforcement: Implement robust authentication, authorization, data protection, and regularly test for vulnerabilities and failure scenarios.

    Observability and Monitoring
        Rule: Ensure systems are transparent with comprehensive logging, monitoring, and alerting.
        Enforcement: Utilize observability tools (e.g., Prometheus, Grafana, ELK) to monitor system health and respond promptly to anomalies.

5. Documentation and Continuous Improvement

    Comprehensive Documentation
        Rule: Maintain thorough and up-to-date documentation covering code, architectural decisions, and system operation.
        Enforcement: Use wikis, inline comments, and ADRs to capture decisions and rationale, ensuring accessibility for current and future developers.

    Continuous Learning and Refactoring
        Rule: Cultivate a culture of continuous improvement with regular code and architectural reviews.
        Enforcement: Schedule technical debt sprints and design review sessions to address and refactor areas that deviate from these standards.

    Risk Management
        Rule: Design with risk mitigation in mind by planning for failure scenarios, backups, and disaster recovery.
        Enforcement: Develop and test incident response plans and integrate risk management processes into the operational workflow.

6. Interdisciplinary and Business Alignment

    Business Alignment
        Rule: Ensure that architectural decisions directly support business goals and rapid feature development.
        Enforcement: Engage regularly with stakeholders and incorporate business metrics into system monitoring and evaluations.

    Risk and Compliance Integration
        Rule: Balance innovation with risk management by incorporating compliance, data privacy, and regulatory requirements into the design.
        Enforcement: Conduct regular audits and risk assessments to ensure compliance with industry standards and regulations.

7. Enforcement and Monitoring

    Automated Tools:
        Use static code analysis, dependency management tools, and continuous monitoring systems to enforce rules automatically.
    Regular Audits:
        Schedule periodic architectural reviews and refactoring sessions to ensure ongoing adherence to this ruleset.
    Feedback Loop:
        Establish clear channels for team feedback and continuous improvement to keep the architecture adaptive and forward-thinking.
