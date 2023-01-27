import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderLeftOutline.svg';

export function BorderLeftOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderLeftOutline">
      <SVG />
    </Icon>
  );
}
