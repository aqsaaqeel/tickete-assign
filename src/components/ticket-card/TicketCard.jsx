import { LightLineComp } from "../LightLineComp";
import { CancelComp } from "../cancel-comp/CancelComp";
import "./TicketCard.css";

export const TicketCard = () => {
  return (
    <div className="typography ticket-container">
      <h3 className="ticket-heading">Tickets overview</h3>
      <div className="ticket-details">
        <p>{"<pax type> (x)"}</p>
        <p>{"<price>"}</p>
      </div>

      <div className="ticket-details">
        <p>{"<pax type> (x)"}</p>
        <p>{"<price>"}</p>
      </div>

      <div className="ticket-details">
        <p>{"<fee>"}</p>
        <p>{"<price>"}</p>
      </div>

      <div className="green ticket-details">
        <p>{"<discount applied>"}</p>
        <p>{"<-price>"}</p>
      </div>

      <LightLineComp />

      <div className="ticket-details">
        <p className="flex green underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.75 9.91409L10.586 1.75003C10.4415 1.60424 10.2631 1.49653 10.0667 1.43654C9.87042 1.37656 9.66229 1.36616 9.46097 1.40628L3.15628 2.67191C3.03673 2.69578 2.92693 2.75452 2.84073 2.84073C2.75452 2.92693 2.69578 3.03673 2.67191 3.15628L1.40628 9.46097C1.36616 9.66229 1.37656 9.87042 1.43654 10.0667C1.49653 10.2631 1.60424 10.4415 1.75003 10.586L9.91409 18.75C10.0296 18.8667 10.1671 18.9594 10.3186 19.0226C10.4702 19.0858 10.6327 19.1183 10.7969 19.1183C10.9611 19.1183 11.1237 19.0858 11.2752 19.0226C11.4267 18.9594 11.5642 18.8667 11.6797 18.75L18.75 11.6797C18.8667 11.5642 18.9594 11.4267 19.0226 11.2752C19.0858 11.1237 19.1183 10.9611 19.1183 10.7969C19.1183 10.6327 19.0858 10.4702 19.0226 10.3186C18.9594 10.1671 18.8667 10.0296 18.75 9.91409ZM6.56253 7.50003C6.37711 7.50003 6.19586 7.44505 6.04168 7.34203C5.88751 7.23902 5.76735 7.0926 5.69639 6.9213C5.62544 6.74999 5.60687 6.56149 5.64304 6.37963C5.67922 6.19778 5.76851 6.03073 5.89962 5.89962C6.03073 5.76851 6.19778 5.67922 6.37963 5.64304C6.56149 5.60687 6.74999 5.62544 6.9213 5.69639C7.0926 5.76735 7.23902 5.88751 7.34203 6.04168C7.44505 6.19586 7.50003 6.37711 7.50003 6.56253C7.50003 6.81117 7.40126 7.04963 7.22544 7.22544C7.04963 7.40126 6.81117 7.50003 6.56253 7.50003Z"
              fill="#006642"
            />
          </svg>
          {"‘TICKETE10’ applied"}
        </p>
        <p className="underline gray-3">Remove</p>
      </div>
      <LightLineComp />
      <div className="gray-2 ticket-details">
        <p>Total</p>
        <p>{"<-price>"}</p>
      </div>
      <p className="underline gray-3 small">You will pay in {"<currency>"}</p>
        <div className="cancel"><CancelComp /></div>
    </div>
  );
};
