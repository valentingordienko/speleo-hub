import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSettingsOutline.svg';

export function DocSettingsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocSettingsOutline">
      <SVG />
    </Icon>
  );
}
