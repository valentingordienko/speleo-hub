import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSettingsOutline.svg';

export function DocSettingsOutline(props: TProps) {
  return (
    <Icon {...props} name="DocSettingsOutline">
      <SVG />
    </Icon>
  );
}
