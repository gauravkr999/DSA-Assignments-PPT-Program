// Q.3 What are REST API ?



// REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs (Application Programming Interfaces) are a way of implementing the principles of REST in building web services. REST APIs enable communication between different software applications over the internet using standard HTTP methods such as GET, POST, PUT, and DELETE.

// Here are some key characteristics and principles of REST APIs:

// 1. Stateless: REST APIs are stateless, meaning that each request from a client to a server contains all the necessary information for the server to understand and process the request. The server doesn't store any client-specific data between requests.

// 2. Resources and URIs: REST APIs are based on the concept of resources, which are identified by unique URIs (Uniform Resource Identifiers). A resource can be any object or entity that the API exposes, such as a user, product, or blog post.

// 3. HTTP Methods: REST APIs use HTTP methods to perform operations on resources. The most commonly used methods are:
//    - GET: Retrieve a representation of a resource.
//    - POST: Create a new resource.
//    - PUT: Update an existing resource.
//    - DELETE: Remove a resource.

// 4. Representation of Resources: REST APIs transfer representations of resources between the client and server. These representations can be in various formats such as JSON, XML, or HTML. The client and server can negotiate the representation format using the `Accept` and `Content-Type` headers.

// 5. Uniform Interface: REST APIs follow a uniform interface, which means they have consistent conventions for interacting with resources. This includes using standard HTTP methods, proper status codes for indicating the result of an operation, and consistent naming conventions for URIs.

// 6. Stateless Communication: REST APIs don't store any client-specific information on the server between requests. Each request is self-contained and includes all the necessary data.

// 7. Hypermedia as the Engine of Application State (HATEOAS): HATEOAS is an important principle of REST. It means that a REST API should provide links to related resources in the responses, allowing clients to navigate and discover available actions dynamically.

// REST APIs have become popular due to their simplicity, scalability, and compatibility with various platforms and programming languages. They are widely used for building web services, mobile applications, and integrating different systems. With RESTful APIs, developers can design and expose well-structured, interoperable, and easily consumable APIs for clients to interact with.