import { Container } from "react-bootstrap"


const BlogPage = () => {
    return (
        <Container>
            <h1>Cohesion and Coupling in software engineering</h1>
            <p>Introduction: The purpose of the Design phase in the Software Development Life Cycle is to produce a solution to a problem given in the SRS(Software Requirement Specification) document. The output of the design phase is a Software Design Document (SDD).
            </p>
            <p>
                Coupling and Cohesion are two key concepts in software engineering that are used to measure the quality of a software system’s design.
            </p>
            Coupling refers to the degree of interdependence between software modules. High coupling means that modules are closely connected and changes in one module may affect other modules. Low coupling means that modules are independent and changes in one module have little impact on other modules.
            <p>
                Cohesion refers to the degree to which elements within a module work together to fulfill a single, well-defined purpose. High cohesion means that elements are closely related and focused on a single purpose, while low cohesion means that elements are loosely related and serve multiple purposes.
            </p>
            Both coupling and cohesion are important factors in determining the maintainability, scalability, and reliability of a software system. High coupling and low cohesion can make a system difficult to change and test, while low coupling and high cohesion make a system easier to maintain and improve.
            <p>
                Basically, design is a two-part iterative process. The first part is Conceptual Design which tells the customer what the system will do. Second is Technical Design which allows the system builders to understand the actual hardware and software needed to solve a customer’s problem
            </p>
        </Container>
    )
}

export default BlogPage;