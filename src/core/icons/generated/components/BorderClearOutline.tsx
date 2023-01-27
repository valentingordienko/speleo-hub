import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderClearOutline.svg';

export function BorderClearOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderClearOutline">
      <SVG />
    </Icon>
  );
}
