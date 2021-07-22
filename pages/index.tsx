import Layout from "../components/Layout";
import TaskInput from "../features/task/TaskInput";
import TaskList from "../features/task/TaskList";

const IndexPage = () => (
  <Layout title="TodoApp">
    <TaskInput />
    <TaskList />
  </Layout>
);

export default IndexPage;
