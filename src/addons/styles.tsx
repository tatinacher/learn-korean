import { createStyles } from "antd-style";

export const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        /*background: linear-gradient(135deg, #6253e1, #04befe);*/
        background: linear-gradient(
          90deg,
          rgba(131, 58, 180, 1) 0%,
          rgba(253, 29, 29, 1) 50%,
          rgba(252, 176, 69, 1) 100%
        );
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }
      &:hover {
        background: linear-gradient(
          90deg,
          rgba(131, 58, 180, 1) 0%,
          rgba(253, 29, 29, 1) 50%,
          rgba(252, 176, 69, 1) 100%
        );
        animation: slidebg 2s linear infinite;
      }

      &:hover::before {
        opacity: 0;
      }
    }
    @keyframes slidebg {
      to {
        background-position: 20vw;
      }
    }
  `,
}));
