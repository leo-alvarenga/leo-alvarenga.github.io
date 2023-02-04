import { useTranslation } from "react-i18next";
import { Page, ProfilePic } from "../../components";

function Home() {
  const { t } = useTranslation();

  return (
    <Page>
      <>
        <ProfilePic src="https://avatars.githubusercontent.com/u/49699932?v=4" />
        <h1 className="text-4xl">Leonardo A. Alvarenga</h1>
        <p className="w-[60%] text-center text-lg">
          {t("page.home.subtitles")}
        </p>
      </>
    </Page>
  );
}

export default Home;
