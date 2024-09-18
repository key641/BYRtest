/**
 * 成绩单pdf
 * @author key641
 */
import React from "react";
import { Page, Text, View, Document, Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "NotoSansSC",
  fonts: [
    { src: "/font/NOTOSANSSC-REGULAR.TTF", fontWeight: "normal" },
    { src: "/font/NOTOSANSSC-BOLD.TTF", fontWeight: "bold" },
    { src: "/font/NOTOSANSSC-LIGHT.TTF", fontWeight: "light" },
  ]
});
// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "NotoSansSC",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  section: {
    flexWrap: "wrap",
    margin: 10,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  row:{
    flexDirection: "row",
  },
  infoRow:{
    width: "80.33vw",
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoText: {
    whiteSpace: "nowrap", 
    fontSize: 12,
    textAlign: "center",
  },
  actText: {
    whiteSpace: "nowrap", 
    marginHorizontal: 10,
    fontSize: 10,
  },
  table: {
    width: "80.2vw",
    borderStyle: "solid",
    fontSize: 12,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    alignItems: "center", 
    justifyContent: "center", 
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableRowHeader: {
    flexDirection: "column",
    width: "16vw",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
  },
  tableCellHeader: {
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCell: {
    textAlign: "center",
  },
  
});

/**
 * 成绩单
 * @param data 一个用户的成绩信息
 * @returns 
 */
const MyDocument = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* 标题 */}
      <View style={[styles.section,styles.title]}>
        <Text>第二课堂成绩单</Text>
      </View>

      {/* 个人信息 */}
      <UserInfo user={data.user} />

      {/* 总评表格 */}
      <View style={styles.table}>
        <Table participation={data.participation} />
      </View>

      {/* 详细成绩 */}
      <ActBox acts={data.acts}/>

    </Page>
  </Document>
);

/**
 * 个人信息
 * @returns 
 */
const UserInfo = ({ user }: { user?: any }) => (
  <View style={styles.infoRow}>
    <Text style={[styles.infoText, {minWidth:50}]}>姓名：{user.name}</Text>
    <Text style={[styles.infoText, {minWidth:50}]}>班级：{user.class_id}</Text>
    <Text style={[styles.infoText, {minWidth:50}]}>学号：{user.id}</Text>
    <Text style={[styles.infoText, {}]}>院系：{user.college}</Text>
  </View>
);

/**
 * 表格
 * @param participation
 * @returns 
 */
const Table = ({ participation }: { participation?: any }) => (
  <View style={styles.tableRow}>
    {participation.map((p: { type: React.Key | null | undefined; },idx: number) => (
      idx % 4 == 0 ? 
      <>
        <TableHeader key={p.type} />
        <TableCell participation={p} key={p.type} />
      </>
      : <TableCell participation={p} key={p.type} />
    ))}
  </View>
);

/**
 * 表格表头
 * @returns 
 */
const TableHeader = () => (
  <View >
    <View style={styles.tableRowHeader}>
      <Text style={styles.tableCellHeader}>活动类型</Text>
    </View>
    <View style={styles.tableRowHeader}>
      <Text style={styles.tableCellHeader}>活动数量</Text>
    </View>
  </View>
);

/**
 * 表格每一格子
 * @param participation 
 * @returns 
 */
const TableCell = ({ participation }: { participation?: any }) => (
  <View>
    <View style={styles.tableRowHeader}>
      <Text style={styles.tableCell}>{participation.type}</Text>
    </View>
    <View style={styles.tableRowHeader}>
      <Text style={styles.tableCell}>{participation.count}</Text>
    </View>
  </View>
);

/**
 * 成绩信息区域
 * @param acts 
 * @returns 
 */
const ActBox = ({ acts }: { acts?: any }) => (
  <View>
    {acts.map((act: { id: React.Key | null | undefined; })=>(
      <ActItem act={act} key = {act.id} />
    ))}
  </View>
);

/**
 * 一条成绩信息
 * @param act
 * @returns 
 */
const ActItem = ({ act }: { act?: any }) => (
  <View style={styles.row}>
    <Text style={[styles.actText, {minWidth:50}]}>{act.name}</Text>
    <Text style={[styles.actText, {minWidth:50}]}>{act.type}</Text>
    <Text style={[styles.actText, {minWidth:50}]}>{act.time}</Text>
    <Text style={[styles.actText, {}]}>{act.score}</Text>
  </View>
);

export default MyDocument;
