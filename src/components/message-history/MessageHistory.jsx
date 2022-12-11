import "./MessageHistory.css"

const MessageHistory = ({ message }) => {
    if(!message) return null

  return (
    <>
        {
            message.map((msg, i) => (
                <div key={i} className={`${msg.messageBy === "operator" ? "operator" : "client"} mt-3`}>
                    <div className="send font-weight-bold text-secondary">
                        <div className="sender">{msg.messageBy}</div>
                        <div className="date">{msg.date}</div>
                    </div>
                    <div className="message">{msg.message}</div>
                </div>
            ))
        }
    </>
  )
}

export default MessageHistory