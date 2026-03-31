export const AVAILABLE_TAGS = [
    // Core Engineering
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Fullstack", value: "fullstack" },
    { label: "Mobile Development", value: "mobile-dev" },

    // Architecture & DevOps
    { label: "System Design", value: "system-design" },
    { label: "Microservices", value: "microservices" },
    { label: "Cloud Computing", value: "cloud-computing" },
    { label: "DevOps & CI/CD", value: "devops" },
    { label: "Kubernetes", value: "kubernetes" },

    // Languages & Frameworks
    { label: "TypeScript", value: "typescript" },
    { label: "React / Next.js", value: "react-nextjs" },
    { label: "Node.js", value: "nodejs" },
    { label: "Python", value: "python" },
    { label: "Go (Golang)", value: "golang" },

    // Data & Security
    { label: "Database Design", value: "database-design" },
    { label: "PostgreSQL", value: "postgresql" },
    { label: "Redis", value: "redis" },
    { label: "Cybersecurity", value: "cybersecurity" },

    // Emerging Tech
    { label: "Artificial Intelligence", value: "ai" },
    { label: "Machine Learning", value: "machine-learning" },
    { label: "Web3", value: "web3" },
]

export const SAMPLE_BLOGS = [
    {
        _id: "blog_001",
        title: "The Future of Distributed Systems in 2026",
        desc: "Exploring how edge computing and decentralized state management are reshaping modern architectural patterns for global scale.",
        coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        tags: ["system-design", "architecture", "cloud-computing"],
        author: {
            username: "arch_master",
            role: "Solutions Architect"
        },
        createdAt: "2026-03-15T10:00:00Z",
        isPublished: true
    },
    {
        _id: "blog_002",
        title: "Mastering Next.js Server Components",
        desc: "A deep dive into partial prereferencing and streaming patterns to achieve sub-100ms LCP in complex dashboard environments.",
        coverImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000",
        tags: ["frontend", "react-nextjs", "typescript"],
        author: {
            username: "dev_jake",
            role: "Senior Frontend Engineer"
        },
        createdAt: "2026-02-28T14:30:00Z",
        isPublished: true
    },
    {
        _id: "blog_003",
        title: "Kubernetes Cost Optimization: A Practical Guide",
        desc: "Stop wasting credits. Learn how to implement Karpenter and rightsizing tools to reduce your monthly cloud bill by 40%.",
        coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000",
        tags: ["devops", "kubernetes", "cloud-computing", "frontend"],
        author: {
            username: "cloud_ops",
            role: "DevOps Lead"
        },
        createdAt: "2026-03-01T09:15:00Z",
        isPublished: true
    },
    {
        _id: "blog_004",
        title: "Rethinking Database Consistency with Redis",
        desc: "When to choose eventual consistency over ACID compliance in high-throughput social media applications.",
        coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000",
        tags: ["backend", "redis", "database-design", "frontend"],
        author: {
            username: "data_wiz",
            role: "Database Engineer"
        },
        createdAt: "2026-01-20T11:45:00Z",
        isPublished: true
    },
    {
        _id: "blog_005",
        title: "Securing Your Node.js API in 2026",
        desc: "Beyond JWTs. Implementing OIDC and hardware-backed authentication for enterprise-grade security layers.",
        coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
        tags: ["backend", "nodejs", "cybersecurity", "frontend"],
        author: {
            username: "secure_dev",
            role: "Security Analyst"
        },
        createdAt: "2026-03-10T16:20:00Z",
        isPublished: true
    },
    {
        _id: "blog_006",
        title: "Building Real-Time AI Agents with Go",
        desc: "Leveraging Goroutines and WebSockets to build highly concurrent LLM-powered assistants that scale to millions of users.",
        coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
        tags: ["golang", "ai", "machine-learning"],
        author: {
            username: "gopher_101",
            role: "AI Engineer"
        },
        createdAt: "2026-02-14T08:00:00Z",
        isPublished: true
    }
];


const res = SAMPLE_BLOGS.filter(
    (obj) => (
        // Loop on the tags
        obj.tags?.some(
            // get the single value from tags
            (val) => (
                // filter out only that matchs the 'frontend'
                val == 'frontend'
            )
        )
    ))
// console.log(res)

const threeTags = SAMPLE_BLOGS.filter(
    // Get the single Element in the array
    (obj) => (
        //chack the lenght of single element if the tags array exist
        obj.tags?.length <= 3
    )
)
// console.log(threeTags)

let userActivity = [
    { user: 'Alice', amount: 55 },
    { user: 'Bob', amount: 75 },
    { user: 'Dev', amount: 30 },
]

const result = userActivity.reduce(
    (acc, obj) => (
        acc.amount < obj.amount ? acc : obj
    )
)

// console.log(result)

let expense = [
    { description: 'Grocessery', amount: 55, catagory: "Food" },
    { description: 'Electircity Bill', amount: 75, catagory: "utility" },
    { description: 'other', amount: 30, catagory: "Food" },
    { description: 'EMIs', amount: 47, catagory: "utility" },
]

const expenceReport = expense.reduce(
    (report, expence) => {
        report[expence.catagory] = (report[expence.catagory] || 0) + expence.amount
        return report
    }, {}
)

// console.log(expenceReport)
// console.log(undefined + 5) NaN

let todo = [
    { description: 'Grocessery', completed: true, Priority: 1 },
    { description: 'Electircity Bill', completed: false, Priority: 2 },
    { description: 'other', completed: false, Priority: 3 },
    { description: 'EMIs', completed: true, Priority: 4 },
]

const todoRes = todo
    .filter((obj) => (!obj.completed))
    .sort((a, b) => b.Priority - a.Priority)

// console.log(todoRes)

let movie = [
    { name: 'A', ratings: [4, 3, 2] },
    { name: 'B', ratings: [5, 1, 2] },
    { name: 'C', ratings: [2, 3, 2] },
]

const ratings = movie.map(
    (mov) => {
        const avg = (mov.ratings.reduce((acc, curr) => acc + curr, 0)) / mov.ratings.length
        return { title: mov.name, ratings: avg.toFixed(2) }
    }
)

// console.log(ratings)
// console.log(movie)