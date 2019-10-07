import Input from "../common/Input";
import Button from "../common/Button";
import Text from "../common/Text";
import contactform from "../Footer/ContactForm.scss";
import cx from "classnames";

const ContactForm = () => {
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
            <Text type="heading">
                <Text type="paragraph">Let's talk</Text>
                <span className={contactform["textarea__emoji"]}>
                    &#128071;
                </span>
            </Text>
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

export default ContactForm;
