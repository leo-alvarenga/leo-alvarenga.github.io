import { useTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import { Tooltip } from "..";
import { contacts } from "../../static/contacts";

function ContactWidget() {
  const { t } = useTranslation();

  return (
    <>
      <span className="w-[80%] max-xl:w-full text-center text-2xl pt-4 border-t-2 border-t-background drop-shadow-lg">
        {t("shared.contacts.title")}
      </span>
      <ul className="list-none flex flex-row py-4 px-2 w-[70%] max-xl:w-full overflow-x-hidden justify-center rounded-lg items-center gap-4 bg-black1">
        {contacts.map((c) => (
          <li key={c.name} className="hover:scale-110 transition-all">
            <Tooltip content={c.name} placement="over">
              <a href={c.redirect} target="_blank">
                <img className={c.style} width={90} src={c.icon} alt={c.name} />
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactWidget;
