import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InboxOutline.svg';

export function InboxOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="InboxOutline">
      <SVG />
    </Icon>
  );
}
