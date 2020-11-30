import React, {useEffect, useState} from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Page } from '@syncfusion/ej2-react-treegrid';
import { projectData } from './datasource';
import { DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';
import './App.css';

function App() {

  const remoteData: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData",
    adaptor: new WebApiAdaptor()
  })

  // Uncomment below codes while binding data through AJAX request
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   const ajax = new Ajax(
  //     "https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData",
  //     "GET"
  //   );
  //   ajax.send();
  //   ajax.onSuccess = (data: any) => {
  //     setData(JSON.parse(data));
  //   }
  // },[])

  return (
    // Change dataSource={data} while binding data through AJAX request
    <TreeGridComponent dataSource={remoteData}
                       idMapping="TaskID"
                       parentIdMapping="ParentItem"
                       hasChildMapping="isParent"
                       treeColumnIndex={1}
                       allowPaging={true}>
      <Inject services={[Page]} />                   
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width='90' textAlign="Right">
        </ColumnDirective>
        <ColumnDirective field="TaskName" headerText="Task Name">
        </ColumnDirective>
        <ColumnDirective field="StartDate" headerText="Start Date" format='yMd'>
        </ColumnDirective>
        <ColumnDirective field="Duration" headerText="Duration">
        </ColumnDirective>
        <ColumnDirective field="Priority" headerText="Priority">
        </ColumnDirective>
      </ColumnsDirective>
    </TreeGridComponent>
  );
}

export default App;
