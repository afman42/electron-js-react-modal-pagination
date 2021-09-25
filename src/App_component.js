import React, { Component } from "react";
import fakeJSON from './api'
import Pagination from "./components/Pagination";
import TableCard from "./components/TableCard";

class App extends Component {
  state = {
    allPosts: [],
    currentPosts: [],
    currentPage: null,
    totalPages: null
  };

  async componentDidMount() {
    const allPosts = await fakeJSON();
    // console.log(allPosts)
    this.setState({ allPosts });
  }

  onPageChanged = data => {
    const { allPosts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPosts = allPosts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPosts, totalPages });
  };

  render() {
    const {
      allPosts,
      currentPosts,
      currentPage,
      totalPages
    } = this.state;
    const totalPosts = allPosts.length;
    if (totalPosts === 0) return null;

    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2 className={headerClass}>
                <strong className="text-secondary">{totalPosts}</strong>{" "}
                Posts
              </h2>
              {currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                  <span className="font-weight-bold">{totalPages}</span>
                </span>
              )}
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination
                totalRecords={totalPosts}
                pageLimit={18}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </div>
          </div>
          <table className="table table-bordered">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Title</th>
		      <th scope="col">Body</th>
		      <th scope="col">Action</th>
		    </tr>
		  </thead>
		  <tbody>
          { currentPosts.length > 0 ? currentPosts.map((post,index) => (
            <TableCard post={post} key={post.id} index={index}/>
          )) : (
          	<TableCard notActive />
          )}
          </tbody>
			</table>
        </div>
      </div>
    );
  }
}

export default App;
