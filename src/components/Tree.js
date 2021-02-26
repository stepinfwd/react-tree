import React, { useState, useEffect } from "react";
import "./Tree.css";
import logo from "../icons8-folder.svg";
const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};
const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <img className="folder" src={logo}></img>
          </div>
        )}

        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}>{} </i>
          {node.label}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
