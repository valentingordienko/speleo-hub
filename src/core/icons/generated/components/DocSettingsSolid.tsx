import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSettingsSolid.svg';

export function DocSettingsSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocSettingsSolid">
      <SVG />
    </Icon>
  );
}
