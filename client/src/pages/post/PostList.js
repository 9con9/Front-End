import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import { postList } from '../../PostData';

const PostList = props => {
  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, [ ])

  return (
    <>
      {/* <table> */}
      {/* <CommonTable headersName={['글번호', '제목', '등록일']}> */}
      <CommonTable headersName={['', '', '']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.classificaion }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      {/* </table> */}
      </CommonTable>
    </>
  )
}

export default PostList;