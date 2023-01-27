import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocsOutline.svg';

export function DocsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocsOutline">
      <SVG />
    </Icon>
  );
}
