import { API } from "../constants/routes";
import { HistoryData, SkillTimerData, TechTrackerData } from "../types";

export async function  getFromAPI (path: string, updateDataHandler: (data: HistoryData[] & TechTrackerData[] & SkillTimerData[] ) => void) {
    try {
      const resp = await fetch(`${API}${path}`);
      const data = await resp.json();
      updateDataHandler(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };