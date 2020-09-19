import * as I from "./interfaces"
/**
 * 指定月の日数を取得
 * @param year  年
 * @param month 月
 * @return 指定日の最初の日
 */
export const getLastDate = (year: number, month: number): Date => {
  return new Date(year, month + 1, 0);
};

export const getFirstDate = (year: number, month: number): Date => {
  return new Date(year, month, 1);
};

/**
 * 指定日の属する週の最初の日（デフォルトで日曜日の日）を返す
 * @param dateOfWeek  確認したい週の属する日
 * @param startDay 最初の日に相当する曜日(number)
 * @return 指定月の日数
 */
export const getFirstDateOfWeek = (dateOfWeek: Date, startDay: number = 0) => {
  const copyedDate = new Date(dateOfWeek.getTime());
  const day = copyedDate.getDay();
  // 日曜日(デフォルト)からどれくらいの曜日分離れているか
  const dayOfdiff = day - startDay;
  copyedDate.setDate(copyedDate.getDate() - dayOfdiff);
  return copyedDate;
};

export const getLastDateOfWeek = (dateOfWeek: Date, endDay: number = 6) => {
  const copyedDate = new Date(dateOfWeek.getTime());
  const day = copyedDate.getDay();
  // 土曜日(デフォルト)からどれくらいの曜日分離れているか
  const dayOfdiff = endDay - day;
  copyedDate.setDate(copyedDate.getDate() + dayOfdiff);
  return copyedDate;
};

export const addDate = (date: Date, addNum: number): Date => {
  const copyedDate = new Date(date.getTime());
  copyedDate.setDate(copyedDate.getDate() + addNum);
  return copyedDate;
};

export const addMonth = (date: Date, addNum: number): Date => {
  const copyedDate = new Date(date.getTime());
  copyedDate.setMonth(copyedDate.getMonth() + addNum);
  return copyedDate;
};

export const fetchProgramList = async (selectDate:number | null): Promise<I.Program[]> => {
  if (selectDate === new Date(2020,8,19).getTime()) {
    return [{
      id: 1,
      title: "タイトル",
      content: "コンテントコンテントコンテントコンテントコンテントコンテント",
      status: "ステータス",
      startTime: new Date(2020, 10, 1).toISOString(),
      endTime: new Date(2020, 10, 4).toISOString(),
      createdDate: new Date(2020, 10, 1).toISOString(),
      updateDate: new Date(2020, 10, 3).toISOString(),
      userId: 1,
    },{
      id: 2,
      title: "タイトル",
      content: "コンテントコンテントコンテントコンテントコンテントコンテント",
      status: "ステータス",
      startTime: new Date(2020, 10, 1).toISOString(),
      endTime: new Date(2020, 10, 4).toISOString(),
      createdDate: new Date(2020, 10, 1).toISOString(),
      updateDate: new Date(2020, 10, 3).toISOString(),
      userId: 1,
    },
    {
      id: 3,
      title: "タイトル",
      content: "コンテントコンテントコンテントコンテントコンテントコンテント",
      status: "ステータス",
      startTime: new Date(2020, 10, 1).toISOString(),
      endTime: new Date(2020, 10, 4).toISOString(),
      createdDate: new Date(2020, 10, 1).toISOString(),
      updateDate: new Date(2020, 10, 3).toISOString(),
      userId: 1,
    }];
  };
  return [];
};