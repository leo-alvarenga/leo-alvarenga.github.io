import {
  Page,
  Profile,
  SkillList,
  ProjectList,
  ContactList,
} from "../../components";

function Home() {
  return (
    <Page>
      <>
        <Profile />
        <SkillList />
        <ContactList />
        <ProjectList />
      </>
    </Page>
  );
}

export default Home;
