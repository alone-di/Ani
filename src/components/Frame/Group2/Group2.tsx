import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Burger } from '../Burger/Burger';
import { BagIcon } from './BagIcon';
import classes from './Group2.module.css';

interface Props {
  className?: string;
  classes?: {
    image1?: string;
    imageRemovebgPreview121?: string;
    root?: string;
  };
  swap?: {
    bag?: ReactNode;
  };
}
/* @figmaId 413:52 */
export const Group2: FC<Props> = memo(function Group2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame14}>
        <div className={classes.frame160}>
          <div className={`${props.classes?.image1 || ''} ${classes.image1}`}></div>
          <div className={`${props.classes?.imageRemovebgPreview121 || ''} ${classes.imageRemovebgPreview121}`}></div>
        </div>
      </div>
      <div className={classes.frame8}>
        <Burger />
        <div className={classes.unnamed}>
          <div className={classes.bag}>{props.swap?.bag || <BagIcon className={classes.icon} />}</div>
        </div>
      </div>
      <div className={classes.frame161}>
        <div className={classes.unnamed2}>
          <div className={classes.aNIROOM}>ANI-ROOM</div>
          <div className={classes.unnamed3}>Магазин для всієї родини. У нас є все необхідне!</div>
        </div>
        <div className={classes.unnamed4}>
          <div className={classes.uA}>UA</div>
          <div className={classes.eN}>EN</div>
        </div>
      </div>
    </div>
  );
});
