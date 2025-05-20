import { styled } from '@mui/material/styles';
import SearchBar from './SearchBar';

const StyledSearchBar = styled(SearchBar)`

  *, ::before,::after{
    z-index: 2;
    background-color: '#ffffff0';
  }

  .MuiCircularProgress-root{
    animation: unset;
    padding: unset;
    margin-inline-start: 3px;
  }

  .add-record-input{
    background-color: #e2e2e2;
    color: dark;

      *{
      border-radius: 0;

      input{
        padding-bottom: 20px;
      }
    } 
  } 

  .main-input, .top-input{
      direction: rtl; // Will be LTR, Mui settings turn to opposite
      margin: auto;

      input, fieldset, label{
        align-items: center;
        font-weight: 600;
        border-width: medium;
      }
  }

  .main-input{ 
      width: 80%;
      /* max-width: 535px; */

      @media (max-width: 600px) {
        width: 95%;
        max-width: 325px;
      }

      input, fieldset, label{
        color: ${props => props.theme.palette.primary.dark + "!important"};
        /* border-color: ${props => props.theme.palette.primary.contrastText + "!important"}; */
        border-color: #6c6c6cd6 !important;
        border-radius: 9px;
      }

      label{
        display: flex;
        justify-items: center;

        span, .MuiSvgIcon-root{
          color: ${props => props.theme.palette.primary.dark + "!important"};
          padding-inline-end: 10px;
        }
      }
    }

  .top-input{
      min-width: 100%;

      input, fieldset, label{
        color: ${props => props.theme.palette.primary.light + "!important"};
        border-color: ${props => props.theme.palette.primary.light + "!important"};
      }

      svg, .MuiCircularProgress-root{
        display: none;
      }
  }

  .top-input input {
    color: ${props => props.theme.palette.primary.light + "!important"};
  }

  /* google search styling - elements from out of REACT */

  #___gcse_0 {
    position: absolute;
    margin-top: -17px;
    border: unset;
    z-index: 1;

    @media (max-width: 600px) {
      max-width: 370px;
      overflow: hidden;
      * {
        font-size: 12px;
      }
    }
  }

  .google-auto-placed {
    overflow: hidden;
  }

  /* The gsc whole element */
  .gsc-control-cse,
  .gsc-control-cse-en {
    max-width: 432px !important;
    visibility: hidden;
    
    form, input{
      height: 0px !important;
    }

    /* .muirtl-gysw57 #___gcse_0 .gs-captcha-outer-wrapper{
      padding: unset !important;
      margin: unset !important;
    } */
  }

  .gcse-my-wrapper-visible{
    .gsc-control-cse,
    .gsc-control-cse-en {
      visibility: visible;
    }
  }

  /* Search results style */

  .gsc-control-wrapper-cse,
  .gsc-results-wrapper-nooverlay,
  .gsc-results-wrapper-visible {
    border-radius: 0px 0px 5px 5px;
    background-color: ${props => props.theme.palette.secondary.light + "!important"};
    text-align: start;
  }

  .gsc-results-wrapper-visible,
  .gcse-searchresults,
  .gsc-control-wrapper-cse {
    max-width: 100%;
    max-height: 285px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 0 1px 2px 0 #7c7c7c;
  } 

  .gsc-control-wrapper-cse {
    overflow: visible;
  }

  #___gcse_0 .gs-captcha-outer-wrapper {
    padding: 30px !important;

    /* @media (max-width: 600px) {
        position: fixed;
        margin: auto;
        right: 30px;
        background-color: #e2e2e2a2;
        z-index: 99999999;
        padding: 20px !important;
    } */
  }

  #___gcse_0 input {
    background: unset !important;
    direction: rtl;
  }

  @media (max-width: 600px) {

    .gsc-control-cse,
    .gsc-control-cse-en {
      width: 90%;
      max-width: 370px !important;
      overflow: hidden;
    }

    #___gcse_0 {
      border: unset;

    }

    .gsc-control-wrapper-cse {
      width: 90% !important;
    }
  }

  .gs-title {
    direction: rtl;
  }

  .gs-title *{
    color: rgba(255, 255, 255, 0) !important; // Clear all colors until filtering, make the lines transparent
  }

  .fixed-gs-title * {
    font-weight: 700 !important;
    color: rgb(81, 81, 81) !important;
  }

  .fixed-gs-title span {
    color: #DF808E !important;
  }

  .gs-title strong {
    color: ${props => props.theme.palette.primary.contrastText + "!important"};
  }

  .gcsc-find-more-on-google-root,
  .gcsc-more-maybe-branding-root {
    display: none !important;
  }

  .gsc-webResult {
    background-color: ${props => props.theme.palette.secondary.light + "!important"};
    cursor: pointer;
  }

  .gsc-result{
    padding: 7px 0px;
    @media (min-width: 600px) {
      padding: 8px;
    }
  }

  .gs-no-results-result .gs-snippet{
    display: block !important;
    visibility: visible !important;
    color: #060603 !important;
    background-color: unset;
    border: unset;
  }

  .gsc-result * {
    font-family: 'Assistant', 'Roboto', 'sans-serif' !important;
    font-weight: 500;
  }

  .gsc-result:hover,
  .gsc-result:focus {
    background-color: rgb(205, 205, 205) !important;
  }

  .gsc-url-top {
    display: none !important;
  }

  .gs-spelling a {
    pointer-events: unset;
  }

  .gs-visibleUrl-breadcrumb .gsc-table-result * {
    display: none !important;
  }

  .gs-visibleUrl,
  .gs-visibleUrl-breadcrumb,
  .gs-snippet {
    display: none !important;
  }

  .gs-visibleUrlop {
    display: none;
  }

  .gsc-table-cell-thumbnail .gsc-thumbnail,
  .gsc-cursor-box {
    display: inline;
  }

  /*results pages numbers navigator (- mobile) */
  .gsc-cursor * {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .gcsc-more-maybe-branding-root {
    display: none;
  }

  .gsc-above-wrapper-area {
    display: none !important;
  }
  
  .gsc-adBlock {
    display: none !important;
  }
/* END Search results style, dom elements out of REACT */

`;

export default StyledSearchBar;
