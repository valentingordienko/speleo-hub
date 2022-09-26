import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSettingsSolid.svg';

export function DocSettingsSolid(props: TProps) {
  return (
    <Icon {...props} name="DocSettingsSolid">
      <SVG />
    </Icon>
  );
}
