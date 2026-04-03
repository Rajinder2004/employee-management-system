const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "amit@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 0,
      "newTask": 3,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "id": 101,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDesc": "Prepare the monthly sales report.\nAnalyze revenue and growth trends.\nSubmit it to the manager.",
        "taskDate": "2026-04-01",
        "category": "Reporting"
      },
      {
        "id": 102,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDesc": "Attend the client meeting.\nDiscuss project requirements in detail.\nNote down key action points.",
        "taskDate": "2026-04-02",
        "category": "Meeting"
      },
      {
        "id": 103,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Email Follow-up",
        "taskDesc": "Check pending client emails.\nRespond with proper updates.\nEnsure all queries are resolved.",
        "taskDate": "2026-04-03",
        "category": "Communication"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "priya@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 0,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "id": 201,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Design UI",
        "taskDesc": "Create modern UI mockups.\nFocus on user-friendly layouts.\nShare designs with the team.",
        "taskDate": "2026-04-02",
        "category": "Design"
      },
      {
        "id": 202,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Bugs",
        "taskDesc": "Identify reported bugs in system.\nWork on resolving issues step by step.\nTest after fixing each bug.",
        "taskDate": "2026-04-03",
        "category": "Development"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Rahul",
    "email": "rahul@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 0,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "id": 301,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API Development",
        "taskDesc": "Develop REST APIs for project.\nEnsure proper authentication.\nTest endpoints before deployment.",
        "taskDate": "2026-04-02",
        "category": "Backend"
      },
      {
        "id": 302,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDesc": "Review team code submissions.\nCheck for bugs and improvements.\nProvide constructive feedback.",
        "taskDate": "2026-04-03",
        "category": "Quality"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Sneha",
    "email": "sneha@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 0,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "id": 401,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDesc": "Prepare project documentation.\nInclude all technical details.\nEnsure clarity and completeness.",
        "taskDate": "2026-04-02",
        "category": "Documentation"
      },
      {
        "id": 402,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Wiki",
        "taskDesc": "Update internal wiki pages.\nAdd latest project updates.\nVerify accuracy of information.",
        "taskDate": "2026-04-03",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Vikram",
    "email": "vikram@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 0,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "id": 501,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDesc": "Analyze current market trends.\nStudy competitor strategies.\nPrepare a summary report.",
        "taskDate": "2026-04-03",
        "category": "Research"
      },
      {
        "id": 502,
        "newTask": true,
        "active": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Ad Campaign",
        "taskDesc": "Plan new ad campaign.\nDecide target audience.\nCoordinate with design team.",
        "taskDate": "2026-04-04",
        "category": "Marketing"
      }
    ]
  }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password" : "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin}
}