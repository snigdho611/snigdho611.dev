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
              <span className="projects_list_item_url">
                Source Code: {element.url ?
                  <a
                    className="projects_list_item_url_tag"
                    href={element.url}
                  >
                    here
                  </a> :
                  <span style={{ opacity: "0.5" }}>
                    unavailable
                  </span>}
              </span>
              <span className="projects_list_item_hosted">
                Deployment: {element.hosted ?
                  <a
                    className="projects_list_item_hosted_tag"
                    href={element.hosted}
                  >
                    here
                  </a> :
                  <span style={{ opacity: "0.5" }}>
                    unavailable
                  </span>}
              </span>
            </div>);
        })}
      </div>
    </div>
  );
};

export default index;