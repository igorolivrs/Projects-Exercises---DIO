import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px;
    user-select: none;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

    &:focus{
        outline: none;
    }

    &.is-selected {
        color: white;
        background-color: #227ed8;
        
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid #ccc;
    margin-top: -5px;
    display: none;

    &.is-selected {
        display:block;
    }

`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

