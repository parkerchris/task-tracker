import { Link } from "react-router-dom"
import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"


const TicketCard = ({ color, ticket }) => {
    return (
      <div classname="ticket-card">
         
          
          <Link to={`/ticket/${ticket.documentid}`} id="link"> 
            <div className="ticket-color"></div>
            <h3>{ticket.title}</h3>
            <AvatarDisplay ticket={ticket} />
            <StatusDisplay status={ticket.status}/>
            <PriorityDisplay/>
            <ProgressDisplay/>
          </Link>
         <DeleteBlock/>
      </div>
    )
  }
  
  export default TicketCard;