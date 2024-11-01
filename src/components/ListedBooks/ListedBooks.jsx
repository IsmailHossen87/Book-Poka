import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../utility/addDB";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readlist,setRealList] = useState([])
    const allbooks = useLoaderData()
    

    useEffect(()=>{
        const storeList = getStoreReadList()
         const storeListInt = storeList.map(id => parseInt(id))
        const readBookList = allbooks?.filter(book => storeListInt.includes(book.bookId));
        setRealList(readBookList)
        
    },[allbooks])
  return (
    <div>
      <h3 className="text-3xl my-8">Books List</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books i read :{readlist.length} </h2>
          <h2>
            {
                readlist.map(book => <Book data={book}></Book>)
            }
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>My wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
