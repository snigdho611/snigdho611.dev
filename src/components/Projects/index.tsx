import "./index.scss";
import data from "../../data";

const index = () => {
  return (
    <div className='projects'>
      <span className='projects_header'>Projects</span>
      <div className="projects_list">
        {data.projects.slice(0).reverse().map((element, i) => {
          return (
            <div key={i} className="projects_list_item">
              <span className="projects_list_item_title">{element.title}</span>
              <span className="projects_list_item_description">{element.description}</span>
              <span className="projects_list_item_stack">{element.stack.map((stack) => (<span>{stack}</span>))}</span>
              <span className="projects_list_item_url">Source Code: {element.url ? <a href={element.url}>here</a> : "unavailable"}</span>
              <span className="projects_list_item_hosted">Deployment: {element.hosted ? <a href={element.hosted}>here</a> : "unavailable"}</span>
            </div>);
        })}
      </div>
    </div>
  );
};

export default index;