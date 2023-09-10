import ApiManager from '../ApiManager';
import { WEBSITES } from './constants';

export const getWebsites = async () => await ApiManager.get(WEBSITES);
