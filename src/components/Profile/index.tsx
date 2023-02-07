import { useTranslation } from "react-i18next";
import ProfilePic from "./ProfilePic";

function Profile() {
  const { t } = useTranslation();

  return (
    <>
      <ProfilePic src="https://avatars.githubusercontent.com/u/49699932?v=4" />
      <h1 className="text-4xl text-center">Leonardo A. Alvarenga</h1>
      <p className="w-[60%] max-xl:w-[90%] text-center text-lg">
        {t("page.home.description")}
      </p>
    </>
  );
}

export default Profile;
