import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderClearOutline.svg';

export function BorderClearOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderClearOutline">
      <SVG />
    </Icon>
  );
}
