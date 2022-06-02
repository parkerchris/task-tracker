import TicketCard from "../components/TicketCard";

const Dashboard = () => {
    
    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Chris Parker',
            avatar: '',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showcasing how to work with NFTs Safely, including how to know if one is not genuine',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Build and Sell AI Model',
            owner: 'Chris Parker',
            avatar: '',
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'Make a video about AI',
            timestamp: '2022-02-13T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build a bot',
            owner: 'Chris Parker',
            avatar: '',
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'Make a video about making a bot',
            timestamp: '2022-02-15T07:36:17+0000'
        },
    ]
    


    return (
      <div className="dashboard">
          <h1>My Projects</h1>
          <div classNam="ticket-container">
              <TicketCard />

          </div>
      </div>
    )
  }
  
  export default Dashboard;