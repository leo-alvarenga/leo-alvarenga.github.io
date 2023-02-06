import { Page, Profile } from "../../components";
import { SkillList, ProjectList } from "../../components";

function Home() {
  return (
    <Page>
      <>
        <Profile />
        <SkillList />
        <ProjectList />
      </>
    </Page>
  );
}

export default Home;
