import Input from "../common/Input";
import Button from "../common/Button";
import contactform from "../Footer/ContactForm.scss";
import cx from "classnames";
import ReactContactForm from "react-mail-form";

const Contact = () => {
    const options = [
        "Collaboration",
        "Inquiry",
        "Offer",
        "Suggestion",
        "Connect",
        "Other"
    ];
    return (
        <div className={contactform["container"]}>
            <Input
                recievedStyle={contactform["textarea"]}
                type="textarea"
                placeholder="Email Address"
            />
            <Input
                recievedStyle={contactform["select"]}
                type="select"
                placeholder="What's this about?"
                options={options}
            />
            <Input
                type="textarea"
                placeholder="Enter your message here"
                recievedStyle={cx(
                    contactform["textarea"],
                    contactform["textarea__big"]
                )}
            />
            <Button title="Send" />
        </div>
    );
};

export default Contact;
