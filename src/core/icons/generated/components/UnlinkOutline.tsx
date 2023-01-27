import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnlinkOutline.svg';

export function UnlinkOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="UnlinkOutline">
      <SVG />
    </Icon>
  );
}
