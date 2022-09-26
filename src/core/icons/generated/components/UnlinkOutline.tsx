import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnlinkOutline.svg';

export function UnlinkOutline(props: TProps) {
  return (
    <Icon {...props} name="UnlinkOutline">
      <SVG />
    </Icon>
  );
}
