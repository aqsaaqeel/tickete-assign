import "./TicketDetails.css";
import "../../App.css";
import { InputComp } from "../input-comp/InputComp";
import { LightLineComp } from "../LightLineComp";
export const TicketDetails = () => {
  return (
    <div className="ticket-detail-container">
      <section className="detail-section">
        <h2 className="gray-2 detail-heading">Enter your details</h2>
        <p className="gray-3 detail-info">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
        <div className="main-details">
          <div className="flex">
            <InputComp name="Tickete Inc" />
            <InputComp name="+85 2345345678" />
          </div>
          <div className="flex">
            <InputComp name="hi@tickete.com" />
            <InputComp name="hi@tickete.com" />
          </div>
        </div>
      </section>
      <section className="additional-detail">
        <h2 className="gray-2 detail-heading">Additional information</h2>
        <p className="gray-3 detail-info">
          We need a few more details to complete your reservation.
        </p>
        <div className="main-details">
          <div className="flex">
            <InputComp name="<custom input>" />
            <InputComp name="<dropdown>" />
          </div>
        </div>
      </section>
      <section className="payment-mode-detail">
        <h2 className="gray-2 detail-heading">Select your mode of payment</h2>
        <p className="gray-3 detail-info">
          Payments with Tickete are secure and encrypted.
        </p>
        <div className="flex-items-between">
          <div className="flex-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V9.08437V17.9906C1.5 18.3884 1.65804 18.77 1.93934 19.0513C2.22064 19.3326 2.60218 19.4906 3 19.4906H21C21.3978 19.4906 21.7794 19.3326 22.0607 19.0513C22.342 18.77 22.5 18.3884 22.5 17.9906V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM12.75 16.5H11.25C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75C10.5 15.5511 10.579 15.3603 10.7197 15.2197C10.8603 15.079 11.0511 15 11.25 15H12.75C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5ZM18.75 16.5H15.75C15.5511 16.5 15.3603 16.421 15.2197 16.2803C15.079 16.1397 15 15.9489 15 15.75C15 15.5511 15.079 15.3603 15.2197 15.2197C15.3603 15.079 15.5511 15 15.75 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5ZM3 8.33437V6H21V8.33437H3Z"
                fill="#474747"
              />
            </svg>
            <span>Credit & debit card</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#0A0A0A"
              stroke="#0A0A0A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              fill="#F5F5F5"
              stroke="#F5F5F5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="main-details">
          <div className="flex">
            <InputComp name="Tickete Inc" />
            <InputComp name="1234 1234 1234 1234" />
          </div>
          <div className="flex">
            <InputComp name="06/26" />
            <InputComp name="***" />
          </div>
        </div>
      </section>
      <LightLineComp />
      <div className="flex-items-between justify-between margin-top">
        <div className="flex-items">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="24"
            viewBox="0 0 35 24"
            fill="none"
          >
            <rect
              y="6.10352e-05"
              width="35"
              height="24"
              rx="4"
              fill="#FEB4C7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.42416 15.3797H4V9.00006H5.42416V15.3797ZM8.97973 9.00006H7.58645C7.58645 10.1741 7.06142 11.2516 6.14601 11.9566L5.59402 12.3816L7.73282 15.3799H9.49132L7.52334 12.621C8.4562 11.666 8.97973 10.3812 8.97973 9.00006ZM11.2513 15.3779H9.90633V9.00128H11.2513V15.3779ZM15.3148 10.9669V11.2491C14.9519 10.9946 14.5139 10.845 14.0415 10.845C12.7911 10.845 11.7775 11.8871 11.7775 13.1725C11.7775 14.458 12.7911 15.5 14.0415 15.5C14.5139 15.5 14.9519 15.3505 15.3148 15.096V15.3779H16.5995V10.9669H15.3148ZM15.3109 13.1727C15.3109 13.7995 14.7898 14.3076 14.1469 14.3076C13.5041 14.3076 12.9829 13.7995 12.9829 13.1727C12.9829 12.5459 13.5041 12.0379 14.1469 12.0379C14.7898 12.0379 15.3109 12.5459 15.3109 13.1727ZM28.8671 11.2491V10.9669H30.1517V15.3779H28.8671V15.096C28.5042 15.3505 28.0662 15.5 27.5937 15.5C26.3433 15.5 25.3297 14.458 25.3297 13.1725C25.3297 11.8871 26.3433 10.845 27.5937 10.845C28.0662 10.845 28.5042 10.9946 28.8671 11.2491ZM27.6991 14.3076C28.342 14.3076 28.8631 13.7995 28.8631 13.1727C28.8631 12.5459 28.342 12.0379 27.6991 12.0379C27.0563 12.0379 26.5352 12.5459 26.5352 13.1727C26.5352 13.7995 27.0563 14.3076 27.6991 14.3076ZM23.047 10.8484C22.5338 10.8484 22.0482 11.0122 21.7235 11.4641V10.9673H20.4445V15.378H21.7392V13.06C21.7392 12.3893 22.1768 12.0608 22.7035 12.0608C23.2681 12.0608 23.5927 12.4075 23.5927 13.0509V15.378H24.8757V12.573C24.8757 11.5465 24.0819 10.8484 23.047 10.8484ZM18.5866 10.9669V11.5414C18.8442 11.1968 19.324 10.9672 19.8456 10.9672V12.2507L19.8411 12.2506L19.8385 12.2504L19.8304 12.2502C19.3221 12.2502 18.5896 12.6236 18.5896 13.3184V15.3779H17.2714V10.9669H18.5866ZM30.7092 14.6421C30.7092 14.1843 31.0701 13.8133 31.5153 13.8133C31.9605 13.8133 32.3214 14.1843 32.3214 14.6421C32.3214 15.0997 31.9605 15.4708 31.5153 15.4708C31.0701 15.4708 30.7092 15.0997 30.7092 14.6421Z"
              fill="#17120F"
            />
          </svg>
          <span>Klarna</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 6.47721 17.5228 2.00006 12 2.00006C6.47715 2.00006 2 6.47721 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001Z"
            fill="#F5F5F5"
            stroke="#0A0A0A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <LightLineComp />
      <section className="total-details">
        <p className="total-details-heading gray-2">{"Total: <price>"}</p>
        <p className="gray-3 underline small-text">
          {"You will pay in <currency>"}
        </p>
        <div className="gray-box flex-items align-center">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_0_1230)">
              <path
                d="M7.99998 14.6666C11.6819 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6819 1.33331 7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998C1.33331 11.6819 4.31808 14.6666 7.99998 14.6666Z"
                fill="#474747"
                stroke="#474747"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                fill="#EBEBEB"
                stroke="#EBEBEB"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1230">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="gray-box-text">
            {"Receive travel tips, suggestions and offers in <city> by email"}
          </span>
        </div>
        <p className="gray-3 small-text">
          With payment, you agree to the general
          <span className="blue"> terms and conditions of Tickete</span> & the{" "}
          <span className="blue">activity provider.</span>
        </p>
        <button>
          Confirm and Pay{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M16.25 3.625H3.75C3.41848 3.625 3.10054 3.7567 2.86612 3.99112C2.6317 4.22554 2.5 4.54348 2.5 4.875V9.46094C2.5 16.4453 8.42188 18.7656 9.60938 19.1562C9.8631 19.2397 10.1369 19.2397 10.3906 19.1562C11.5781 18.7656 17.5 16.4453 17.5 9.46094V4.875C17.5 4.54348 17.3683 4.22554 17.1339 3.99112C16.8995 3.7567 16.5815 3.625 16.25 3.625ZM10 17.9688C9.00781 17.6406 4.35156 15.8125 3.80469 10.5H10V4.875H16.25V9.46094C16.2519 9.80806 16.2336 10.155 16.1953 10.5H10V17.9688Z"
              fill="white"
            />
          </svg>
        </button>
      </section>
    </div>
  );
};
