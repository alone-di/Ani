import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BagIcon } from './BagIcon';
import classes from './Frame.module.css';
import { Group2 } from './Group2/Group2';

interface Props {
  className?: string;
}
/* @figmaId 431:68 */
export const Frame: FC<Props> = memo(function Frame(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame171}>
        <div className={classes.frame172}>
          <Group2
            className={classes.group2}
            classes={{ image1: classes.image1, imageRemovebgPreview121: classes.imageremovebgpreview121 }}
            swap={{
              bag: <BagIcon className={classes.icon} />,
            }}
          />
        </div>
      </div>
    </div>
  );
});
