const getStoreReadList = ()=>{
    const store = localStorage.getItem('read-list')
    if(store){
        const storedList = JSON.parse(store)
        return storedList;
    }else{
        return []
    }
}
const addStoreList =(id)=>{
    const storeList = getStoreReadList();
    if(storeList.includes(id)){
        alert('data already added')
    }else{
        storeList.push(id)
        const storelist = JSON.stringify(storeList)
        localStorage.setItem('read-list',storelist)
    }
}
export {addStoreList,getStoreReadList}