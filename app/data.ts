const item1 = {
  user: {
    id: 1,
    name: "一号",
    class_id: "2",
    college: "理学院",
  },
  participation: [
    { type: "参与活动总量", count: 10 },
    { type: "思想成长", count: 5 },
    { type: "社会实践", count: 1 },
    { type: "志愿服务", count: 0 },
    { type: "学术科创", count: 1 },
    { type: "文化艺术", count: 2 },
    { type: "强身健体", count: 1 },
    { type: "其他", count: 0 },
  ],
  acts: [
    { id: 1, name: "活动1", type: "思想成长", time: "2021-10-01", score: 5 },
    { id: 2, name: "活动2", type: "社会实践", time: "2021-10-02", score: 1 },
    { id: 3, name: "活动3", type: "学术科创", time: "2021-10-03", score: 1 },
    { id: 4, name: "活动4", type: "文化艺术", time: "2021-10-04", score: 2 },
    { id: 5, name: "活动5", type: "强身健体", time: "2021-10-05", score: 1 },
  ],
};

const item2 = {
  user: {
    id: 2,
    name: "二号",
    class_id: "2",
    college: "计算机学院",
  },
  participation: [
    { type: "参与活动总量", count: 3 },
    { type: "思想成长", count: 5 },
    { type: "社会实践", count: 1 },
    { type: "志愿服务", count: 6 },
    { type: "学术科创", count: 1 },
    { type: "文化艺术", count: 12 },
    { type: "强身健体", count: 1 },
    { type: "其他", count: 0 },
  ],
  acts: [
    { id: 1, name: "22活动1", type: "思想成长", time: "2021-10-01", score: 5 },
    { id: 2, name: "22活动2", type: "社会实践", time: "2021-10-02", score: 1 },
    { id: 3, name: "22活动3", type: "学术科创", time: "2021-10-03", score: 1 },
    { id: 4, name: "22活动4", type: "文化艺术", time: "2021-10-04", score: 2 },
    { id: 5, name: "22活动5", type: "强身健体", time: "2021-10-05", score: 1 },
    { id: 4, name: "活动4", type: "文化艺术", time: "2021-10-04", score: 2 },
    { id: 5, name: "活动5", type: "强身健体", time: "2021-10-05", score: 1 },
  ],
};

const item3 = {
  user: {
    id: 3,
    name: "三号",
    class_id: "3",
    college: "未来学院",
  },
  participation: [
    { type: "参与活动总量", count: 1 },
    { type: "思想成长", count: 1 },
    { type: "社会实践", count: 1 },
    { type: "志愿服务", count: 1 },
    { type: "学术科创", count: 1 },
    { type: "文化艺术", count: 1 },
    { type: "强身健体", count: 1 },
    { type: "其他", count: 0 },
  ],
  acts: [
    { id: 1, name: "33活动1", type: "思想成长", time: "2021-10-01", score: 5 },
    { id: 2, name: "33活动2", type: "社会实践", time: "2021-10-02", score: 1 },
    { id: 3, name: "33活动3", type: "学术科创", time: "2021-10-03", score: 1 },
    { id: 4, name: "33活动4", type: "文化艺术", time: "2021-10-04", score: 2 },
    { id: 5, name: "33活动5", type: "强身健体", time: "2021-10-05", score: 1 },
    { id: 4, name: "33活动4", type: "文化艺术", time: "2021-10-04", score: 2 },
    { id: 5, name: "33活动5", type: "强身健体", time: "2021-10-05", score: 1 },
  ],
};

const datas = [item1, item2, item3];

export default datas;
