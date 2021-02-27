import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCustomSelect = styled.div`
  & .datelist {
    position: relative;
    border: 1px solid #dedfe2;
    border-radius: 6px;
    width: 175px;
    cursor: pointer;
    &.active {
      &:after {
        transform: rotate(180deg);
      }
    }
    &:after {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      content: url('./img/Select-icon.svg');
      margin-left: 25px;
      pointer-events: none;
    }
    &-btn {
      border: none;
      outline: none;
      background-color: transparent;
      box-sizing: border-box;
      padding: 14px 17px;
      width: 100%;
      height: 100%;
      font-size: 14px;
      line-height: 17px;
      cursor: pointer;
      text-align: left;
    }
    & .change-date-zone {
      padding: 17px;
      max-height: 290px;
      overflow-y: auto;
      top: calc(100% + 10px);
      width: 100%;
      left: 0;
      cursor: default;
      position: absolute;
      border: 1px solid rgba(12, 20, 39, 0.05);
      box-sizing: border-box;
      box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
      border-radius: 8px;
      background-color: #fff;
      z-index: 10;
      &_btn {
        font-size: 14px;
        line-height: 17px;
        color: #0c1427;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        display: block;
        &:not(:last-of-type) {
          margin-bottom: 25px;
        }
      }
      &.hided {
        display: none;
      }
    }
  }
`;
export const CustomSelect = ({ date, dateList, changeActiveZoneDate }) => {
  const [show, setShow] = useState(false);
  const showDateList = (el = undefined) => {
    if (typeof el !== 'string') {
      setShow(!show);
      return;
    }
    changeActiveZoneDate(el);
    setShow(!show);
  };
  const className = show ? 'change-date-zone' : 'change-date-zone hided';
  return (
    <StyledCustomSelect>
      <div className="datelist">
        <button type="button" className="datelist-btn" onClick={showDateList}>
          {date}
        </button>
        <div className={className}>
          {dateList.map((el, index) => (
            <button
              className="change-date-zone_btn"
              type="button"
              key={index.toString()}
              onClick={() => showDateList(el)}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
    </StyledCustomSelect>
  );
};

CustomSelect.propTypes = {
  dateList: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  changeActiveZoneDate: PropTypes.func.isRequired,
};
