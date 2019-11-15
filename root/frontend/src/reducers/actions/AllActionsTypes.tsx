import { InterfaceActionTypes } from '../reducer_userinterface/Actions';
import { AuthorizationActionTypes } from '../reducer_authorization/Actions';
import {DataActionTypes} from '../reducer_data/Actions';
export type AllActionTypes =
        | InterfaceActionTypes
        | AuthorizationActionTypes
        | DataActionTypes

export type AllAppActions = AllActionTypes
